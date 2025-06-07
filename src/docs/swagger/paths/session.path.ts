import {
  SessionCreateSchema,
  SessionEndSchema,
} from "../../../schema/session.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Session"];

export const sessionPaths = {
  "/sessions": {
    get: {
      summary: "Get all sessions",
      description: "Retrieve a list of all sessions in the system",
      tags,
      responses: {
        "200": {
          description: "List of sessions retrieved successfully",
        },
        "404": {
          description: "No sessions found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new session",
      description: "Create a new session in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(SessionCreateSchema),
      responses: {
        "201": {
          description: "Session created successfully",
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
  "/sessions/{id}": {
    get: {
      summary: "Get a session by ID",
      description: "Retrieve a session by its ID",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the session to retrieve",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Session retrieved successfully",
        },
        "404": {
          description: "Session not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    delete: {
      summary: "Delete a session",
      description: "Delete a session from the system",
      tags,
      parameters: [
        {
          name: "roomId",
          in: "query",
          required: true,
          description: "ID of the session to delete",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Session deleted successfully",
        },
        "404": {
          description: "Session not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    patch: {
      summary: "End a session",
      description: "End an active session by its ID",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the session to end",
          schema: {
            type: "string",
          },
        },
      ],
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(SessionEndSchema),
      responses: {
        "200": {
          description: "Session ended successfully",
        },
        "404": {
          description: "Session not found",
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
};
