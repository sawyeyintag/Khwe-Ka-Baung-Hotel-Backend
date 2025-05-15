import { Router } from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room.routes";
import roomTypeRouter from "./room-type.routes";

const rootRouter: Router = Router();

rootRouter.use("/auth/admins", authRoutes);
rootRouter.use("/rooms", authRoutes);
rootRouter.use("/rooms", roomRoutes);
rootRouter.use("/room-types", roomTypeRouter);

export default rootRouter;
