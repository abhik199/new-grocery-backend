import { prisma } from "../../config/config";

import { Request, Response, NextFunction } from "express";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      description,
      stock,
      price,
      discountPrice,
      brand,
      categoryId,
    } = req.body;
    const product = await prisma.product.create({
      data: {
        title,
        description,
        stock,
        price,
        discountPrice,
        brand,
        categoryId,
      },
    });
    if (product) {
      res.status(201).json({
        message: "Product created successfully",
        product,
      });
    }
    return res.json({ success: false, message: "failed to create product" });
  } catch (error) {
    return next(error);
  }
};

export const productController = {
  createProduct,
};
