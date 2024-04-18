import { Router } from "express";
import { router as userRoutes } from "./user.routes";
import { router as adminRoutes } from "./admin.routes";
const router = Router();

router.use("/users", userRoutes);
router.use("/admin", adminRoutes);
export { router };
