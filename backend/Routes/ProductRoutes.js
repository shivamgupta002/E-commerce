import express from "express";
import productController from "../Controller/ProductController.js";
const router = express.Router();

router.post("/addProduct", productController.addProduct);
router.get("/getProduct", productController.getAllProduct);
router.get("/getProductById/:id", productController.getProductById);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.put("/updateProduct/:id", productController.updateProduct);

export default router;
