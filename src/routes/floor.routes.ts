import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import floorController from "../controllers/floor.controller";

import { FloorUpsertSchema } from "../schema/floor.zod";
import { validateParams } from "../middlewares/validateParams.middleware";

const floorRouter: Router = Router();

floorRouter.get("", routeErrorHandler(floorController.getAllFloors));
floorRouter.post(
  "",
  validateBody(FloorUpsertSchema),
  routeErrorHandler(floorController.createFloor)
);
floorRouter.delete(
  "/:floorNumber",
  validateParams({ floorNumber: "number" }),
  routeErrorHandler(floorController.deleteFloor)
);

export default floorRouter;
