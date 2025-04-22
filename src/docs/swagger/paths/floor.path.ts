import { FloorCreateSchema } from "../../../schema/floor.zod";
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
      ...zodSchemaConverter(FloorCreateSchema),
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
    put: {
      summary: "Update an existing floor",
      description: "Update an existing floor in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(FloorCreateSchema),
      responses: {
        "200": {
          description: "Floor updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Floor not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    delete: {
      summary: "Delete a floor",
      description: "Delete a floor from the system",
      tags,
      parameters: [
        {
          name: "FloorId",
          in: "query",
          required: true,
          description: "ID of the floor to delete",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
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
