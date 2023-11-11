import express from "express";
import authController from "../Controller/authController.js";

const router = express.Router();

router.post("/users/register", authController.registration);

export default router;
