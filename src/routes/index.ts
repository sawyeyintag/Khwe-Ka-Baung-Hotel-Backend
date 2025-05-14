import { Router } from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room-routes";

const rootRouter: Router = Router();

rootRouter.use("/auth/admins", authRoutes);
rootRouter.use("/rooms", authRoutes);
rootRouter.use("/rooms", roomRoutes);

export default rootRouter;
