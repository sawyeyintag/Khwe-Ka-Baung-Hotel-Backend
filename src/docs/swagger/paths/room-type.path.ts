import { RoomTypeUpsertSchema } from "../../../schema/room-type.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Room Type"];

export const roomTypePaths = {
  "/room-types": {
    get: {
      summary: "Get all room types",
      description: "Retrieve a list of all room types in the system",
      tags,
      responses: {
        "200": {
          description: "List of room types retrieved successfully",
        },
        "404": {
          description: "No room types found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new room type",
      description: "Create a new room type in the system",
      tags,
      ...zodSchemaConverter(RoomTypeUpsertSchema),
      responses: {
        "201": {
          description: "Room Type created successfully",
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
  "/room-types/{id}": {
    put: {
      summary: "Update an existing room type",
      description: "Update an existing room type in the system",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the room type to update",
          schema: {
            type: "integer",
          },
        },
      ],
      ...zodSchemaConverter(RoomTypeUpsertSchema),
      responses: {
        "200": {
          description: "Room Type updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Room Type not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
