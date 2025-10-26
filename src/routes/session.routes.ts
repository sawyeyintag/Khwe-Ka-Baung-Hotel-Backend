import { Router } from "express";

import { SessionController } from "@/controllers/session.controller";

import { routeErrorHandler } from "../middlewares/route-error.middleware";
import { validateParams } from "../middlewares/validate-params.middleware";
import { validateBody } from "../middlewares/validation.middleware";
import { SessionCreateSchema, SessionEndSchema } from "../schema/session.zod";

const sessionRouter: Router = Router();

sessionRouter.get("", routeErrorHandler(SessionController.getAllSessions));
sessionRouter.post(
  "",
  validateBody(SessionCreateSchema),
  routeErrorHandler(SessionController.createSession)
);
sessionRouter.get(
  "/:id",
  validateParams({ id: "number" }),
  routeErrorHandler(SessionController.getSessionById)
);
sessionRouter.delete(
  "/:id",
  validateParams({ id: "number" }),
  routeErrorHandler(SessionController.deleteSession)
);
sessionRouter.patch(
  "/:id/end",
  validateParams({ id: "number" }),
  validateBody(SessionEndSchema),
  routeErrorHandler(SessionController.endSession)
);

export default sessionRouter;
