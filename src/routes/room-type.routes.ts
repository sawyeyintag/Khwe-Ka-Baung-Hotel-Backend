import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomTypeCreateSchema } from "../schema/room-type.zod";

import roomTypeController from "../controllers/room-type.controller";

const roomTypeRouter: Router = Router();

roomTypeRouter.get("", routeErrorHandler(roomTypeController.getAllRoomTypes));
roomTypeRouter.post(
  "",
  validateBody(RoomTypeCreateSchema),
  routeErrorHandler(roomTypeController.createRoomType)
);
roomTypeRouter.put(
  "/:id",
  validateBody(RoomTypeCreateSchema),
  routeErrorHandler(roomTypeController.updateRoomType)
);

export default roomTypeRouter;
