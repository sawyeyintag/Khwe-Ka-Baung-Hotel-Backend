import { Router } from "express";

import { GuestController } from "@/controllers/guest.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateParams } from "../middlewares/validate-params.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { GuestUpsertSchema } from "../schema/guest.zod";

const guestRouter: Router = Router();

guestRouter.get("", routeErrorHandler(GuestController.getAllGuests));
guestRouter.post(
  "",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(GuestController.createGuest)
);
guestRouter.get("/search", routeErrorHandler(GuestController.searchGuests));
guestRouter.get(
  "/nic-card/:nicCardNum",
  validateParams({ nicCardNum: "string" }),
  routeErrorHandler(GuestController.getGuestByNicCardNum)
);
guestRouter.get(
  "/:id",
  validateParams({ id: "string" }),
  routeErrorHandler(GuestController.getGuestById)
);
guestRouter.put(
  "/:id",
  validateBody(GuestUpsertSchema),
  routeErrorHandler(GuestController.updateGuest)
);
guestRouter.delete("/:id", routeErrorHandler(GuestController.deleteGuest));

export default guestRouter;
