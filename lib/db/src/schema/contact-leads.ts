import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactLeadsTable = pgTable("contact_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertContactLeadSchema = createInsertSchema(contactLeadsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertContactLead = z.infer<typeof insertContactLeadSchema>;
export type ContactLead = typeof contactLeadsTable.$inferSelect;