import { prisma } from "../../config/config";
import { Request, Response, NextFunction } from "express";
import { categoryRequest } from "../../types";

const createCategory = async (
  req: categoryRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    if (category) {
      res.status(201).json({
        status: 201,
        message: "Category created successfully",
        data: category,
      });
    }
    return res.json({ success: false, message: "failed to create category" });
  } catch (error) {
    return next(error);
  }
};

const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    return next(error);
  }
};

export const categoryController = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategory,
};
