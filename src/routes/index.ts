import { Router } from "express";
import authRoutes from "./auth.routes";
import roomRoutes from "./room.routes";
import roomTypeRoutes from "./room-type.routes";
import floorRoutes from "./floor.routes";
import roomStatusRoutes from "./room-status.routes";
import bookingRoutes from "./booking.routes";
import guestRoutes from "./guest.routes";

const rootRouter: Router = Router();

rootRouter.use("/auth/admins", authRoutes);
rootRouter.use("/rooms", roomRoutes);
rootRouter.use("/room-types", roomTypeRoutes);
rootRouter.use("/floors", floorRoutes);
rootRouter.use("/room-statuses", roomStatusRoutes);
rootRouter.use("/bookings", bookingRoutes);
rootRouter.use("/guests", guestRoutes);

export default rootRouter;
