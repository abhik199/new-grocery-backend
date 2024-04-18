import { RegisterUserRequest } from "./../../types/index";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "../../config/config";

// category

const userSignup = async (
  req: RegisterUserRequest,
  res: Response,
  next: NextFunction
) => {
  const userSchema = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
  const validateFormData = (inputs: unknown) => {
    const isValidData = userSchema.parse(inputs);
    return isValidData;
  };
  try {
    const { username, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
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
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
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
  } catch (error) {
    return next(error);
  }
};
const userLogout = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    return next(error);
  }
};
const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};
const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};
const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};

const resendEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    return next(error);
  }
};
const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};

export const authController = {
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
