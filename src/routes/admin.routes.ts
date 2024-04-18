import { Router } from "express";
import { categoryController } from "../controllers/admin/category";
import { productController } from "../controllers/admin/product";
const router = Router();

router.post("/category", categoryController.createCategory);
router.post("/product", productController.createProduct);
router.get("/product", productController.getProduct);

export { router };
