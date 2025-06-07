import { Router } from "express";
import roomController from "../controllers/room.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomCreateSchema, RoomEditSchema } from "../schema/room.zod";
import { validateParams } from "../middlewares/validateParams.middleware";

const roomRouter: Router = Router();

roomRouter.get("", routeErrorHandler(roomController.getAllRooms));
roomRouter.post(
  "",
  validateBody(RoomCreateSchema),
  routeErrorHandler(roomController.createRoom)
);
roomRouter.put(
  "/:roomNumber",
  validateBody(RoomEditSchema),
  validateParams({ roomNumber: "string" }),
  routeErrorHandler(roomController.updateRoom)
);
roomRouter.delete(
  "/:roomNumber",
  validateParams({ roomNumber: "string" }),
  routeErrorHandler(roomController.deleteRoom)
);

export default roomRouter;
