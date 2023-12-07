import express from "express";
import CartController from "../Controller/CartController.js";

const router = express.Router();

router.post("/addCart", CartController.addCart);

export default router;
