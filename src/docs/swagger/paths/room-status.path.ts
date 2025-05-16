import { RoomStatusUpsertSchema } from "../../../schema/room-status.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Room Status"];

export const roomStatusPaths = {
  "/room-statuses": {
    get: {
      summary: "Get all room statuses",
      description: "Retrieve a list of all room statuses in the system",
      tags,
      responses: {
        "200": {
          description: "List of room statuses retrieved successfully",
        },
        "404": {
          description: "No room statuses found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new room status",
      description: "Create a new room status in the system",
      tags,
      ...zodSchemaConverter(RoomStatusUpsertSchema),
      responses: {
        "201": {
          description: "Room Status created successfully",
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
  "/room-statuses/{id}": {
    put: {
      summary: "Update an existing room status",
      description: "Update an existing room status in the system",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the room status to update",
          schema: {
            status: "integer",
          },
        },
      ],
      ...zodSchemaConverter(RoomStatusUpsertSchema),
      responses: {
        "200": {
          description: "Room Status updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Room Status not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
