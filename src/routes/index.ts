import { Router } from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room.routes";
import roomTypeRoutes from "./room-type.routes";
import floorRoutes from "./floor.routes";

const rootRouter: Router = Router();

rootRouter.use("/auth/admins", authRoutes);
rootRouter.use("/rooms", roomRoutes);
rootRouter.use("/room-types", roomTypeRoutes);
rootRouter.use("/floors", floorRoutes);

export default rootRouter;
