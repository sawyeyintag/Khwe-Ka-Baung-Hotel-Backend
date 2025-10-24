import { Router } from "express";

import roomStatusController from "../controllers/room-status.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomStatusUpsertSchema } from "../schema/room-status.zod";

const roomStatusRouter: Router = Router();

roomStatusRouter.get(
  "",
  routeErrorHandler(roomStatusController.getAllRoomStatuses)
);
roomStatusRouter.put(
  "/:id",
  validateBody(RoomStatusUpsertSchema),
  routeErrorHandler(roomStatusController.updateRoomStatus)
);

export default roomStatusRouter;
