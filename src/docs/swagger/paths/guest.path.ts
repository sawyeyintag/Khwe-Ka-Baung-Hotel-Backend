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
  "/guests/search": {
    get: {
      summary: "Search guests",
      description:
        "Search guests by name, phone number, or NIC card number with autocomplete-style results",
      tags,
      parameters: [
        {
          name: "q",
          in: "query",
          required: true,
          description:
            "Search query - can match name, phone, or NIC card number",
          schema: {
            type: "string",
            minLength: 1,
          },
          examples: {
            name: {
              value: "saw",
              description: "Search by name",
            },
            phone: {
              value: "061",
              description: "Search by phone number",
            },
            nic: {
              value: "MI63",
              description: "Search by NIC card number",
            },
          },
        },
        {
          name: "limit",
          in: "query",
          required: false,
          description:
            "Maximum number of results to return (default: 10, max: 20)",
          schema: {
            type: "integer",
            minimum: 1,
            maximum: 20,
            default: 10,
          },
        },
      ],
      responses: {
        "200": {
          description: "Search results retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        uid: {
                          type: "string",
                          description: "Guest unique identifier",
                        },
                        name: {
                          type: "string",
                          description: "Guest full name",
                        },
                        phone: {
                          type: "string",
                          description: "Guest phone number",
                        },
                        email: {
                          type: "string",
                          description: "Guest email address",
                        },
                        nicCardNum: {
                          type: "string",
                          nullable: true,
                          description: "Guest NIC card number",
                        },
                      },
                    },
                  },
                },
              },
              examples: {
                name_search: {
                  summary: "Search by name",
                  value: {
                    data: [
                      {
                        uid: "123e4567-e89b-12d3-a456-426614174000",
                        name: "Saw Min Thant",
                        phone: "09061234567",
                        email: "saw@example.com",
                        nicCardNum: "MI631234567",
                      },
                      {
                        uid: "234e5678-f90c-23e4-b567-537725285111",
                        name: "Thaw Saw",
                        phone: "09071234568",
                        email: "thaw@example.com",
                        nicCardNum: "MI641234568",
                      },
                    ],
                  },
                },
                phone_search: {
                  summary: "Search by phone",
                  value: {
                    suggestions: [
                      {
                        uid: "345e6789-g01d-34f5-c678-648836396222",
                        name: "John Doe",
                        phone: "09061999888",
                        email: "john@example.com",
                        nicCardNum: "MI651234567",
                      },
                    ],
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
  },
  "/guests/{id}": {
    get: {
      summary: "Get guest by ID",
      description: "Retrieve a guest by their unique ID",
      tags,
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the guest to retrieve",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Guest retrieved successfully",
        },
        "404": {
          description: "Guest not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
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
            type: "string",
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
            type: "string",
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
  "/guests/nic-card/{nicCardNum}": {
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
