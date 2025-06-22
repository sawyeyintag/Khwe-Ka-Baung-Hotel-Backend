import { GuestUpsertSchema } from "../../../schema/guest.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Guest"];

export const guestPaths = {
  "/guests": {
    get: {
      summary: "Get all guests",
      description: "Retrieve a list of all guests in the system",
      tags,
      responses: {
        "200": {
          description: "List of guests retrieved successfully",
        },
        "404": {
          description: "No guests found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new guest",
      description: "Create a new guest in the system",
      tags,
      ...zodSchemaConverter(GuestUpsertSchema),
      responses: {
        "201": {
          description: "Guest created successfully",
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
  "/guests/{id}": {
    put: {
      summary: "Update an existing guest",
      description: "Update an existing guest in the system",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the guest to update",
          schema: {
            type: "string", // <-- should be 'type', not 'status'
          },
        },
      ],
      ...zodSchemaConverter(GuestUpsertSchema),
      responses: {
        "200": {
          description: "Guest updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Guest not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    delete: {
      summary: "Delete a guest",
      description: "Delete a guest from the system",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the guest to delete",
          schema: {
            type: "string", // <-- should be 'type', not 'status'
          },
        },
      ],
      responses: {
        "204": {
          description: "Guest deleted successfully",
        },
        "404": {
          description: "Guest not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
  "/guests/{nicCardNum}": {
    get: {
      summary: "Get guest by NIC card number",
      description: "Retrieve a guest by their NIC card number",
      tags: ["Guest"],
      parameters: [
        {
          name: "nicCardNum",
          in: "path",
          required: true,
          description: "NIC card number of the guest",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Guest retrieved successfully",
          content: {
            "application/json": {
              example: {
                data: {
                  id: "12345",
                  nicCardNum: "123456789V",
                  firstName: "John",
                  lastName: "Doe",
                  email: "john.doe@example.com",
                  phone: "+94771234567",
                  checkInDate: "2024-06-20T14:00:00Z",
                  checkOutDate: "2024-06-25T11:00:00Z",
                  roomNumber: "101",
                },
              },
            },
          },
        },
        "404": {
          description: "Guest not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
