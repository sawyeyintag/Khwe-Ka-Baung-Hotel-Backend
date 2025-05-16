import { BookingUpsertSchema } from "../../../schema/booking.zod";
import { zodSchemaConverter } from "../zodSchemaConverter";

const tags = ["Booking"];

export const bookingPaths = {
  "/bookings": {
    get: {
      summary: "Get all bookings",
      description: "Retrieve a list of all bookings in the system",
      tags,
      responses: {
        "200": {
          description: "List of bookings retrieved successfully",
        },
        "404": {
          description: "No bookings found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Create a new booking",
      description: "Create a new booking in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(BookingUpsertSchema),
      responses: {
        "201": {
          description: "Booking created successfully",
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
      summary: "Update an existing booking",
      description: "Update an existing booking in the system",
      tags,
      // This is a custom function to convert Zod schema to Swagger schema
      ...zodSchemaConverter(BookingUpsertSchema),
      responses: {
        "200": {
          description: "Booking updated successfully",
        },
        "400": {
          description: "Invalid input data",
        },
        "404": {
          description: "Booking not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
    delete: {
      summary: "Delete a booking",
      description: "Delete a booking from the system",
      tags,
      parameters: [
        {
          name: "roomId",
          in: "query",
          required: true,
          description: "ID of the booking to delete",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Booking deleted successfully",
        },
        "404": {
          description: "Booking not found",
        },
        "500": {
          description: "Internal server error",
        },
      },
    },
  },
};
