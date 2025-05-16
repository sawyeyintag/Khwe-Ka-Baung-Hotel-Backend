import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import floorController from "../controllers/floor.controller";

import { FloorUpsertSchema } from "../schema/floor.zod";

const floorRouter: Router = Router();

floorRouter.get("", routeErrorHandler(floorController.getAllFloors));
floorRouter.post(
  "",
  validateBody(FloorUpsertSchema),
  routeErrorHandler(floorController.createFloor)
);

export default floorRouter;
