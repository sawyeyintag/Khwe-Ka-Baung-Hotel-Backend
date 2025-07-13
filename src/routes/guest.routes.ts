import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import guestController from "../controllers/guest.controller";

import { GuestUpsertSchema } from "../schema/guest.zod";
import { validateParams } from "../middlewares/validate-params.middleware";

const guestRouter: Router = Router();

guestRouter.get("", routeErrorHandler(guestController.getAllGuests));
guestRouter.post(
  "",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(guestController.createGuest)
);
guestRouter.get("/search", routeErrorHandler(guestController.searchGuests));
guestRouter.get(
  "/nic-card/:nicCardNum",
  validateParams({ nicCardNum: "string" }),
  routeErrorHandler(guestController.getGuestByNicCardNum)
);
guestRouter.get(
  "/:id",
  validateParams({ id: "string" }),
  routeErrorHandler(guestController.getGuestById)
);
guestRouter.put(
  "/:id",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(guestController.updateGuest)
);
guestRouter.delete("/:id", routeErrorHandler(guestController.deleteGuest));

export default guestRouter;
