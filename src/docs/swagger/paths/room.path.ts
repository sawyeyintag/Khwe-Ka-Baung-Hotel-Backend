import { RoomCreateSchema } from "../../../schema/room.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Room"];

export const roomPaths = {
  "/rooms": {
    get: {
      summary: "Get all rooms",
      description: "Retrieve a list of all rooms in the system",
      tags,
      responses: {
        "200": {
          description: "List of rooms retrieved successfully",
        },
        "404": {
          description: "No rooms found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new room",
      description: "Create a new room in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(RoomCreateSchema),
      responses: {
        "201": {
          description: "Room created successfully",
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
  "/rooms/{roomNumber}": {
    put: {
      summary: "Update a room by room number",
      description: "Update an existing room using its room number",
      tags,
      parameters: [
        {
          name: "roomNumber",
          in: "path",
          required: true,
          description: "Room number of the room to update",
          schema: {
            type: "string",
          },
        },
      ],
      ...zodSchemaConverter(RoomCreateSchema),
      responses: {
        "200": {
          description: "Room updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Room not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    delete: {
      summary: "Delete a room by room number",
      description: "Delete a room using its room number",
      tags,
      parameters: [
        {
          name: "roomNumber",
          in: "path",
          required: true,
          description: "Room number of the room to delete",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Room deleted successfully",
        },
        "404": {
          description: "Room not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
