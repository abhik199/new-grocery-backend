"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth/auth.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/signup", auth_controller_1.authController.userSignup);
router.post("/login", auth_controller_1.authController.userLogin);
