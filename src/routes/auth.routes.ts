import { Router } from "express";
import authController from "../controllers/auth.controller";
import { errorHandler } from "../error-handler";

const authRouter: Router = Router();

authRouter.post("", errorHandler(authController.registerAdmin));

authRouter.post("/tokens", errorHandler(authController.loginAdmin));

export default authRouter;
