import { Router } from "express";

import { RoomController } from "@/controllers/room.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";

const roomRouter: Router = Router();

roomRouter.get("", routeErrorHandler(RoomController.getAllRooms));

export default roomRouter;
