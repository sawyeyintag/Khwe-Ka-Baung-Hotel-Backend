import { Router } from "express";
import sessionController from "../controllers/session.controller";
import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { validateParams } from "../middlewares/validate-params.middleware";
import { SessionCreateSchema, SessionEndSchema } from "../schema/session.zod";

const sessionRouter: Router = Router();

sessionRouter.get("", routeErrorHandler(sessionController.getAllSessions));
sessionRouter.post(
  "",
  validateBody(SessionCreateSchema),
  routeErrorHandler(sessionController.createSession)
);
sessionRouter.get(
  "/:id",
  validateParams({ id: "number" }),
  routeErrorHandler(sessionController.getSessionById)
);
sessionRouter.delete(
  "/:id",
  validateParams({ id: "number" }),
  routeErrorHandler(sessionController.deleteSession)
);
sessionRouter.patch(
  "/:id/end",
  validateParams({ id: "number" }),
  validateBody(SessionEndSchema),
  routeErrorHandler(sessionController.endSession)
);

export default sessionRouter;
