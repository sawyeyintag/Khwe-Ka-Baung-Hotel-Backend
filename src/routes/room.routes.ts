import { Router } from "express";

import { RoomController } from "@/controllers/room.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";

const roomRouter: Router = Router();

// Get all rooms (basic info, optional filters: roomTypeId, floor)
roomRouter.get("/", routeErrorHandler(RoomController.getAllRooms));

// Get available rooms for a date range (required: startDate, endDate; optional: roomTypeId, floor)
roomRouter.get(
  "/available",
  routeErrorHandler(RoomController.getAvailableRooms)
);

// Get specific room details (optional: startDate, endDate for filtering sessions/bookings)
roomRouter.get(
  "/:roomNumber",
  routeErrorHandler(RoomController.getRoomByNumber)
);

export default roomRouter;
