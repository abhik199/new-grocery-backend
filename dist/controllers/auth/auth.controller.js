"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../config/config");
// category
const userSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userSchema = zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8),
    });
    const validateFormData = (inputs) => {
        const isValidData = userSchema.parse(inputs);
        return isValidData;
    };
    try {
        const { username, email, password } = req.body;
        const existingUser = yield config_1.prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield config_1.prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        if (user) {
            return res.status(201).json({
                success: true,
                message: "User created successfully",
            });
        }
        return res.json({ success: false, message: "user created failed " });
    }
    catch (error) {
        console.log(error);
        return next(error);
    }
});
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield config_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Login successful",
        });
    }
    catch (error) {
        return next(error);
    }
});
const userLogout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const resendEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const updateProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
const refreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return next(error);
    }
});
exports.authController = {
    userSignup,
    userLogin,
    userLogout,
    forgotPassword,
    resendEmail,
    resetPassword,
    changePassword,
    refreshToken,
    updateProfile,
};
