import { Request, Response, NextFunction, RequestHandler } from "express";
import { AnyZodObject, ZodError } from "zod";
import { ValidationException } from "../exceptions/validation";

export function validateBody(schema: AnyZodObject): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ValidationException(error));
      } else {
        next(error);
      }
    }
  };
}
