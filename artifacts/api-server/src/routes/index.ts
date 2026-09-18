import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactLeadsRouter from "./contact-leads";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactLeadsRouter);

export default router;
