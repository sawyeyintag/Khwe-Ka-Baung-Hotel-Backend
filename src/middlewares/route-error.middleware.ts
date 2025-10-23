import { Request, Response, NextFunction, RequestHandler } from "express";

import { InternalException } from "../exceptions/internal-exception";
import { HttpException } from "../exceptions/root";
import log from "../utils/logger";

export function routeErrorHandler(method: RequestHandler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: unknown) {
      let exception: HttpException;
      log.error(`Error caught: ${error}`);
      if (error instanceof HttpException) {
        exception = error;
      } else {
        exception = new InternalException("Something went wrong!", error);
      }
      next(exception);
    }
  };
}
