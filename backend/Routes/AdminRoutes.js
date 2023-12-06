import express from "express";
import adminController from "../Controller/AdminController.js";
const router = express.Router();

router.post('/login',adminController.login);

export default router;