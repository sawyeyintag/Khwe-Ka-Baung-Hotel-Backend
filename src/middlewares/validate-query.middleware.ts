// middleware/validateQuery.ts
import { Request, Response, NextFunction } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";

type ValidationSchema = {
  [key: string]: "number" | "string";
};

export const validateQuery = (schema: ValidationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    for (const [queryName, type] of Object.entries(schema)) {
      const value = req.query[queryName] as string;

      // Skip validation if query parameter is not provided (optional)
      if (value === undefined) {
        continue;
      }

      if (type === "number") {
        const numValue = parseInt(value);

        if (isNaN(numValue) || numValue <= 0) {
          errors.push(`${queryName} must be a valid positive number`);
        }
      } else if (type === "string") {
        if (value === null || value.trim() === "") {
          errors.push(`${queryName} must be a valid string`);
        }
      }
    }

    if (errors.length > 0) {
      throw new BadRequestsException(
        `Invalid query parameters: ${errors.join(", ")}`
      );
    }

    next();
  };
};
