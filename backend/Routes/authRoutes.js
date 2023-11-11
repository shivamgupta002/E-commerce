import express from "express";
import authController from "../Controller/authController.js";
import checkIsUserAuthenticated from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/users/register", authController.registration);
router.post("/users/login", authController.login);

router.post(
  "/users/changePassword",
  checkIsUserAuthenticated,
  authController.changePassword
);

export default router;
