import { z } from "zod";

export const SessionCreateSchema = z.object({
  roomNumber: z
    .string()
    .regex(/^\d{3}$/, "Room number must be a 3-digit number"),
  guestIds: z
    .array(z.string().uuid())
    .refine((arr) => arr.every((id) => typeof id === "string"), {
      message: "Guest IDs must be valid UUIDs",
    }),
  numberOfExtraBeds: z.number().int(),
  actualCheckIn: z.date(),
});

export const SessionEndSchema = z.object({
  actualCheckOut: z.date(),
});
