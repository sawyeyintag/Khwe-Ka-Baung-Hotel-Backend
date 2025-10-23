import { Router } from "express";

import floorController from "../controllers/floor.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";

const floorRouter: Router = Router();

floorRouter.get("", routeErrorHandler(floorController.getAllFloors));

export default floorRouter;
