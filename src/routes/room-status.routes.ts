import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomStatusUpsertSchema } from "../schema/room-status.zod";

import roomStatusController from "../controllers/room-status.controller";

const roomStatusRouter: Router = Router();

roomStatusRouter.get(
  "",
  routeErrorHandler(roomStatusController.getAllRoomStatuses)
);
roomStatusRouter.post(
  "",
  validateBody(RoomStatusUpsertSchema),
  routeErrorHandler(roomStatusController.createRoomStatus)
);
roomStatusRouter.put(
  "/:id",
  validateBody(RoomStatusUpsertSchema),
  routeErrorHandler(roomStatusController.updateRoomStatus)
);

export default roomStatusRouter;
