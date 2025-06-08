import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomTypeUpsertSchema } from "../schema/room-type.zod";

import roomTypeController from "../controllers/room-type.controller";

const roomTypeRouter: Router = Router();

roomTypeRouter.get("", routeErrorHandler(roomTypeController.getAllRoomTypes));
roomTypeRouter.put(
  "/:id",
  validateBody(RoomTypeUpsertSchema),
  routeErrorHandler(roomTypeController.updateRoomType)
);

export default roomTypeRouter;
