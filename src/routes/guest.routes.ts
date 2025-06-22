import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import guestController from "../controllers/guest.controller";

import { GuestUpsertSchema } from "../schema/guest.zod";
import { validateParams } from "../middlewares/validate-params.middleware";

const guestRouter: Router = Router();

guestRouter.get("", routeErrorHandler(guestController.getAllGuests));
guestRouter.get(
  "/:nicCardNum",
  validateParams({ nicCardNum: "string" }),
  routeErrorHandler(guestController.getGuestByNicCardNum)
);
guestRouter.post(
  "",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(guestController.createGuest)
);
guestRouter.put(
  "/:id",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(guestController.updateGuest)
);
guestRouter.delete("/:id", routeErrorHandler(guestController.deleteGuest));

export default guestRouter;
