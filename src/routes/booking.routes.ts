import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import bookingController from "../controllers/booking.controller";

import { BookingUpsertSchema } from "../schema/booking.zod";

const bookingRouter: Router = Router();

bookingRouter.get("", routeErrorHandler(bookingController.getAllBooking));
bookingRouter.post(
  "",
  validateBody(BookingUpsertSchema),
  routeErrorHandler(bookingController.createBooking)
);

export default bookingRouter;
