import { Router } from "express";
import authController from "../controllers/auth.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { AdminLoginSchema, AdminRegisterSchema } from "../schema/auth.zod";

const authRouter: Router = Router();

authRouter.post(
  "",
  validateBody(AdminRegisterSchema),
  routeErrorHandler(authController.registerAdmin)
);

authRouter.post(
  "/tokens",
  validateBody(AdminLoginSchema),
  routeErrorHandler(authController.loginAdmin)
);

export default authRouter;
