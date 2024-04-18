import { Router } from "express";
import { router as userRoutes } from "./user.routes";
const router = Router();

router.use("/users", userRoutes);

export { router };
