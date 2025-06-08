import { Router } from "express";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import floorController from "../controllers/floor.controller";

const floorRouter: Router = Router();

floorRouter.get("", routeErrorHandler(floorController.getAllFloors));

export default floorRouter;
