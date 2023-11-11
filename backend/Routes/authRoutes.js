import express from "express";
import authController from "../Controller/authController.js";

const router = express.Router();

router.post("/users/register", authController.registration);
router.post("/users/login", authController.login);

export default router;
