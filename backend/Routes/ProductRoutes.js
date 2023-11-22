import express from "express";
import productController from "../Controller/ProductController.js";
const router = express.Router();

router.post("/addProduct", productController.addProduct);
router.get("/getProduct", productController.getAllProduct);
router.get("/deleteProduct/:id", productController.deleteProduct);

export default router;
