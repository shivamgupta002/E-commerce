import express from "express";
import productController from "../Controller/ProductController.js";
const router = express.Router();

router.post("/addProduct", productController.addProduct);

export default router;
