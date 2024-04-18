import { Router } from "express";
import { authController } from "../controllers/auth/auth.controller";
const router = Router();

router.post("/signup", authController.userSignup);
router.post("/login", authController.userLogin);
router.post("/logout", authController.userLogout);
router.post("/resend_email", authController.resendEmail);
router.post("/verify_email", authController.verifyOtp);

export { router };
