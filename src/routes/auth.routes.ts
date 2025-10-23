// import { Router } from "express";
// import { routeErrorHandler } from "../middlewares/route-error.middleware";
// import { validateBody } from "../middlewares/validation.middleware";
// import { AdminLoginSchema, AdminRegisterSchema } from "../schema/auth.zod";
// import { AuthController } from "@/controllers/auth.controller";

// const authRouter: Router = Router();

// authRouter.post(
//   "",
//   validateBody(AdminRegisterSchema),
//   routeErrorHandler(AuthController.registerAdmin)
// );

// authRouter.post(
//   "/tokens",
//   validateBody(AdminLoginSchema),
//   routeErrorHandler(authController.loginAdmin)
// );

// export default authRouter;
