import { Router } from "express";
import authRoutes from "./auth";

const rootRouter: Router = Router();

rootRouter.use("/auth/admins", authRoutes);

export default rootRouter;
