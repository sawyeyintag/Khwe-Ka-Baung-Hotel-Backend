import { HttpException } from "../exceptions/root";
import { Request, Response, NextFunction } from "express";

export function globalErrorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(error.statusCode).json({
    statusCode: error.statusCode,
    message: error.message,
    errors: error.errors,
  });
}
