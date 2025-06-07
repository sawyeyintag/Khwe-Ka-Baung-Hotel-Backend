// middleware/validateParams.ts
import { Request, Response, NextFunction } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";

type ValidationSchema = {
  [key: string]: "number" | "string";
};

export const validateParams = (schema: ValidationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    for (const [paramName, type] of Object.entries(schema)) {
      const value = req.params[paramName];

      if (type === "number") {
        const numValue = parseInt(value);

        if (isNaN(numValue) || numValue <= 0) {
          errors.push(`${paramName} must be a valid positive number`);
        }
      } else if (type === "string") {
        if (value === undefined || value === null || value.trim() === "") {
          errors.push(`${paramName} must be a valid string`);
        }
      }
    }

    if (errors.length > 0) {
      throw new BadRequestsException(
        `Invalid parameters: ${errors.join(", ")}`
      );
    }

    next();
  };
};
