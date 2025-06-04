import { z } from "zod";

export const SessionCreateSchema = z.object({
  roomNumber: z.number().min(3, "Room number must be a positive integer"),
  guestIds: z
    .array(z.string().uuid())
    .refine((arr) => arr.every((id) => typeof id === "string"), {
      message: "Guest IDs must be valid UUIDs",
    }),
  numberOfExtraBeds: z.number().int(),
  actualCheckIn: z.date(),
});
