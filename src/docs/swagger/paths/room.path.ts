import { RoomCreateSchema } from "../../../schema/room.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Room"];

export const roomPaths = {
  "/rooms": {
    get: {
      summary: "Get all rooms",
      description:
        "Retrieve a list of all rooms with basic information. Use this endpoint to get a general overview of rooms.",
      tags,
      parameters: [
        {
          name: "roomTypeId",
          in: "query",
          description: "Filter rooms by room type ID",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
        },
        {
          name: "floor",
          in: "query",
          description: "Filter rooms by floor number",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
        },
      ],
      responses: {
        "200": {
          description: "List of rooms retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
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
  "/rooms/available": {
    get: {
      summary: "Get available rooms for a date range",
      description:
        "Retrieve rooms that are available (no sessions or bookings) during the specified date range. Both startDate and endDate are required.",
      tags,
      parameters: [
        {
          name: "startDate",
          in: "query",
          description: "Start date for availability check (ISO 8601 format)",
          required: true,
          schema: {
            type: "string",
            format: "date-time",
            example: "2025-01-10T00:00:00.000Z",
          },
        },
        {
          name: "endDate",
          in: "query",
          description: "End date for availability check (ISO 8601 format)",
          required: true,
          schema: {
            type: "string",
            format: "date-time",
            example: "2025-01-15T00:00:00.000Z",
          },
        },
        {
          name: "roomTypeId",
          in: "query",
          description: "Filter by room type ID",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
        },
        {
          name: "floor",
          in: "query",
          description: "Filter by floor number",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
        },
      ],
      responses: {
        "200": {
          description: "List of available rooms retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Missing required parameters (startDate or endDate)",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
  "/rooms/{roomNumber}": {
    get: {
      summary: "Get specific room details",
      description:
        "Retrieve detailed information about a specific room, including all sessions and bookings. Optionally filter sessions/bookings by date range.",
      tags,
      parameters: [
        {
          name: "roomNumber",
          in: "path",
          required: true,
          description: "Room number (3-digit identifier)",
          schema: {
            type: "string",
            example: "101",
          },
        },
        {
          name: "startDate",
          in: "query",
          description:
            "Start date to filter sessions/bookings (ISO 8601 format)",
          required: false,
          schema: {
            type: "string",
            format: "date-time",
            example: "2025-01-10T00:00:00.000Z",
          },
        },
        {
          name: "endDate",
          in: "query",
          description: "End date to filter sessions/bookings (ISO 8601 format)",
          required: false,
          schema: {
            type: "string",
            format: "date-time",
            example: "2025-01-15T00:00:00.000Z",
          },
        },
      ],
      responses: {
        "200": {
          description: "Room details retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "object",
                  },
                },
              },
            },
          },
        },
        "404": {
          description: "Room not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
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
