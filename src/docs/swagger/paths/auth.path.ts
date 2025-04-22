import { AdminRegisterSchema } from "../../../schema/auth.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Auth"];

export const authPaths = {
  "/auth/admins": {
    post: {
      summary: "Register a new admin",
      description: "This endpoint allows an admin to be registered.",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(AdminRegisterSchema),
      responses: {
        "201": {
          description: "Admin successfully registered",
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
  "/auth/admins/tokens": {
    post: {
      summary: "Admin login",
      description:
        "This endpoint allows an admin to log in and obtain a token.",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(AdminRegisterSchema),
      responses: {
        "200": {
          description: "Successfully logged in, token returned",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        "401": {
          description: "Invalid credentials",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
