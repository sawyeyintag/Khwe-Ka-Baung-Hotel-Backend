import { Router } from "express";

import { BookingController } from "@/controllers/booking.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { BookingUpsertSchema } from "../schema/booking.zod";

const bookingRouter: Router = Router();

bookingRouter.get("", routeErrorHandler(BookingController.getAllBooking));
bookingRouter.post(
  "",
  validateBody(BookingUpsertSchema),
  routeErrorHandler(BookingController.createBooking)
);

export default bookingRouter;
