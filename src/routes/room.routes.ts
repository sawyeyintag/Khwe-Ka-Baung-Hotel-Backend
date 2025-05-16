import { Router } from "express";
import roomController from "../controllers/room.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { RoomUpsertSchema } from "../schema/room.zod";

const roomRouter: Router = Router();

roomRouter.get("", routeErrorHandler(roomController.getAllRooms));
roomRouter.post(
  "",
  validateBody(RoomUpsertSchema),
  routeErrorHandler(roomController.createRoom)
);

export default roomRouter;
