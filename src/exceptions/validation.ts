import { z } from "zod";
import { HttpException } from "./root";

export class ValidationException extends HttpException {
  constructor(error: z.ZodError) {
    const formattedErrors = error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
      code: err.code,
    }));

    super("Validation error", 422, formattedErrors);
  }
}
