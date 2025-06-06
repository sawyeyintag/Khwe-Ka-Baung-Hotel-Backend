import { FloorUpsertSchema } from "../../../schema/floor.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Floor"];

export const floorPaths = {
  "/floors": {
    get: {
      summary: "Get all floors",
      description: "Retrieve a list of all floors in the system",
      tags,
      responses: {
        "200": {
          description: "List of floors retrieved successfully",
        },
        "404": {
          description: "No floors found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new floor",
      description: "Create a new floor in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(FloorUpsertSchema),
      responses: {
        "201": {
          description: "Floor created successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
  "/floors/{floorNumber}": {
    delete: {
      summary: "Delete a floor",
      description: "Delete a specific floor by its number",
      tags,
      parameters: [
        {
          name: "floorNumber",
          in: "path",
          required: true,
          schema: {
            type: "integer",
            format: "int32",
          },
          description: "The number of the floor to delete",
        },
      ],
      responses: {
        "204": {
          description: "Floor deleted successfully",
        },
        "404": {
          description: "Floor not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
