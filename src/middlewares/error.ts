import { HttpException } from "../exceptions/root";
import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
}
