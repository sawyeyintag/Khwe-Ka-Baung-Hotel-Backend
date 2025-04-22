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

      // Add format for specific types
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
  };

  return typeMap[zodType] || "string";
}
