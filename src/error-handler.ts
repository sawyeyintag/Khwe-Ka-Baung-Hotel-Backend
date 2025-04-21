import { Request, Response, NextFunction } from "express";
import { HttpException } from "./exceptions/root";
import { InternalException } from "./exceptions/internal-exception";
import log from "./utils/logger";
import { ZodError } from "zod";
import { BadRequestsException } from "./exceptions/bad-requests";

export function errorHandler(method: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let exception: HttpException;
      log.error(`Error caught: ${error}`);
      if (error instanceof HttpException) {
        exception = error;
      } else if (error instanceof ZodError) {
        exception = new BadRequestsException("Validation error", error);
      } else {
        exception = new InternalException("Something went wrong!", error);
      }

      next(exception);
    }
  };
}
