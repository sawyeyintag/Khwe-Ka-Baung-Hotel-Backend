import { Router } from "express";

import bookingRoutes from "./booking.routes";
import guestRoutes from "./guest.routes";
import roomTypeRoutes from "./room-type.routes";
import roomRoutes from "./room.routes";
import sessionRoutes from "./session.routes";

const rootRouter: Router = Router();

rootRouter.use("/rooms", roomRoutes);
rootRouter.use("/room-types", roomTypeRoutes);
rootRouter.use("/bookings", bookingRoutes);
rootRouter.use("/guests", guestRoutes);
rootRouter.use("/guests", guestRoutes);
rootRouter.use("/sessions", sessionRoutes);

export default rootRouter;
