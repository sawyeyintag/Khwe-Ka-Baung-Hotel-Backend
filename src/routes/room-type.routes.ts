import { Router } from "express";

import { RoomTypeController } from "@/controllers/room-type.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomTypeUpsertSchema } from "../schema/room-type.zod";

const roomTypeRouter: Router = Router();

roomTypeRouter.get("", routeErrorHandler(RoomTypeController.getAllRoomTypes));
roomTypeRouter.put(
  "/:id",
  validateBody(RoomTypeUpsertSchema),
  routeErrorHandler(RoomTypeController.updateRoomType)
);

export default roomTypeRouter;
