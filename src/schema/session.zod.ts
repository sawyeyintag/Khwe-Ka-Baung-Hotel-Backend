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
  roomPrice: z.number(),
  extraBedPrice: z.number(),
  note: z.string().optional(),
  isBreakfastIncluded: z.boolean(),
  checkInAt: z.string(),
  checkOutAt: z.string(),
  isActive: z.boolean().default(true),
});

export const SessionEndSchema = z.object({
  actualCheckOut: z.string(),
});
