import { createHmac, timingSafeEqual } from "node:crypto";
import { Router, type IRouter, type Request } from "express";
import { desc } from "drizzle-orm";
import { db, contactLeadsTable } from "@workspace/db";
import {
  AdminLoginBody,
  AdminLoginResponse,
  AdminLogoutResponse,
  CreateContactLeadBody,
  CreateContactLeadResponse,
  ListContactLeadsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const COOKIE_NAME = "omg_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12;

function getRequiredSecret(name: "ADMIN_PASSWORD" | "SESSION_SECRET"): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function signSession(expiresAt: number): string {
  const payload = String(expiresAt);
  const signature = createHmac("sha256", getRequiredSecret("SESSION_SECRET"))
    .update(payload)
    .digest("hex");
  return `${payload}.${signature}`;
}

function isValidSession(req: Request): boolean {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return false;

  const token = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim().split("="))
    .find(([name]) => name === COOKIE_NAME)?.[1];
  if (!token) return false;

  const [expiresAtText, suppliedSignature] = token.split(".");
  const expiresAt = Number(expiresAtText);
  if (!expiresAtText || !suppliedSignature || !Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    return false;
  }

  const expectedSignature = createHmac("sha256", getRequiredSecret("SESSION_SECRET"))
    .update(expiresAtText)
    .digest("hex");
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

router.post("/contact-leads", async (req, res): Promise<void> => {
  const parsed = CreateContactLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please provide a valid name, email, and message." });
    return;
  }

  const [lead] = await db.insert(contactLeadsTable).values(parsed.data).returning();
  res.status(201).json(CreateContactLeadResponse.parse(lead));
});

router.post("/admin/login", (req, res): void => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Password is required." });
    return;
  }

  const supplied = Buffer.from(parsed.data.password);
  const expected = Buffer.from(getRequiredSecret("ADMIN_PASSWORD"));
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
    res.status(401).json({ error: "Incorrect password." });
    return;
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  res.cookie(COOKIE_NAME, signSession(expiresAt), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE_SECONDS * 1000,
    path: "/",
  });
  res.json(AdminLoginResponse.parse({ authenticated: true }));
});

router.get("/admin/leads", async (req, res): Promise<void> => {
  if (!isValidSession(req)) {
    res.status(401).json({ error: "Admin session required." });
    return;
  }

  const leads = await db
    .select()
    .from(contactLeadsTable)
    .orderBy(desc(contactLeadsTable.createdAt));
  res.json(ListContactLeadsResponse.parse(leads));
});

router.post("/admin/logout", (_req, res): void => {
  res.clearCookie(COOKIE_NAME, { path: "/" });
  res.json(AdminLogoutResponse.parse({ authenticated: false }));
});

export default router;