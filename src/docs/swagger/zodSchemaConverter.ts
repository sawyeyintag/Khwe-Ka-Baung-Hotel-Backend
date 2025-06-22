import { ZodObject, ZodRawShape, ZodTypeAny } from "zod";

// Define types for Swagger schema
interface SwaggerProperty {
  type: string;
  description?: string;
  format?: string;
  items?: any;
  enum?: any[];
}

interface SwaggerSchema {
  type: string;
  properties: Record<string, SwaggerProperty>;
  required?: string[];
}

interface SwaggerRequestBody {
  requestBody: {
    content: {
      "application/json": {
        schema: SwaggerSchema;
      };
      // "multipart/form-data": {
      //   schema: SwaggerSchema;
      // };
    };
    required: boolean;
  };
}

// Define types for Zod checks
interface ZodCheck {
  kind: string;
  [key: string]: any;
}

export function zodSchemaConverter<T extends ZodRawShape>(
  zodSchema: ZodObject<T>
): SwaggerRequestBody {
  // Extract properties and required fields from Zod schema
  const properties: Record<string, SwaggerProperty> = {};
  const required: string[] = [];

  // Process each field in the Zod schema
  Object.entries(zodSchema.shape).forEach(
    ([key, field]: [string, ZodTypeAny]) => {
      // Get field type and metadata
      const fieldType = field._def.typeName;
      const isRequired = !field.isOptional();
      const description = field._def.description;

      // Build property definition
      const property: SwaggerProperty = {
        type: mapZodTypeToSwagger(fieldType),
      };

      // Add description if available
      if (description) {
        property.description = description;
      }

      // Handle array types - add items property
      if (fieldType === "ZodArray") {
        const arrayElement = field._def.type;
        const elementType = arrayElement._def.typeName;
        property.items = {
          type: mapZodTypeToSwagger(elementType),
        };

        // Handle string format for array elements
        if (elementType === "ZodString" && arrayElement._def.checks) {
          const formatCheck = arrayElement._def.checks.find(
            (check: ZodCheck) =>
              check.kind === "email" ||
              check.kind === "url" ||
              check.kind === "uuid"
          );
          if (formatCheck) {
            property.items.format = formatCheck.kind;
          }
        }
      }

      // Handle ZodEffects (for .refine() calls)
      if (fieldType === "ZodEffects") {
        const innerType = field._def.schema._def.typeName;
        property.type = mapZodTypeToSwagger(innerType);

        // If it's an array with effects, handle the array structure
        if (innerType === "ZodArray") {
          const arrayElement = field._def.schema._def.type;
          const elementType = arrayElement._def.typeName;
          property.items = {
            type: mapZodTypeToSwagger(elementType),
          };

          // Handle string format for array elements
          if (elementType === "ZodString" && arrayElement._def.checks) {
            const formatCheck = arrayElement._def.checks.find(
              (check: ZodCheck) =>
                check.kind === "email" ||
                check.kind === "url" ||
                check.kind === "uuid"
            );
            if (formatCheck) {
              property.items.format = formatCheck.kind;
            }
          }
        }
      }

      // Add format for specific types (non-array)
      if (fieldType === "ZodString" && field._def.checks) {
        const formatCheck = field._def.checks.find(
          (check: ZodCheck) =>
            check.kind === "email" ||
            check.kind === "url" ||
            check.kind === "uuid"
        );
        if (formatCheck) {
          property.format = formatCheck.kind;
        }

        // Handle regex patterns
        const regexCheck = field._def.checks.find(
          (check: ZodCheck) => check.kind === "regex"
        );
        if (regexCheck) {
          property.description = property.description
            ? `${property.description} (Pattern: ${regexCheck.regex})`
            : `Pattern: ${regexCheck.regex}`;
        }
      }

      // Handle number constraints (integer)
      if (fieldType === "ZodNumber" && field._def.checks) {
        const intCheck = field._def.checks.find(
          (check: ZodCheck) => check.kind === "int"
        );
        if (intCheck) {
          property.type = "integer";
        }
      }

      // Handle Date type with proper format
      if (fieldType === "ZodDate") {
        property.format = "date-time";
      }

      // Handle enum types
      if (fieldType === "ZodEnum") {
        property.enum = field._def.values;
      }

      // Add property to properties object
      properties[key] = property;

      // Add to required array if needed
      if (isRequired) {
        required.push(key);
      }
    }
  );

  // Build the requestBody object
  return {
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: properties,
            ...(required.length > 0 && { required }),
          },
        },
        // "multipart/form-data": {
        //   schema: {
        //     type: "object",
        //     properties: properties,
        //     ...(required.length > 0 && { required }),
        //   },
        // },
      },
      required: true,
    },
  };
}

// Helper function to map Zod types to Swagger types
function mapZodTypeToSwagger(zodType: string): string {
  const typeMap: Record<string, string> = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBoolean: "boolean",
    ZodArray: "array",
    ZodObject: "object",
    ZodEnum: "string",
    ZodDate: "string", // with format: date-time
    ZodEffects: "object", // Will be overridden based on inner type
  };

  return typeMap[zodType] || "string";
}
