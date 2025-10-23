import { z } from "zod";

export const BookingUpsertSchema = z.object({
  roomNumber: z
    .string()
    .regex(/^\d{3}$/, "Room number must be a 3-digit number"),
  contactName: z.string().min(1, "Contact name is required"),
  contactPhone: z.string().min(1, "Contact phone is required"),
  contactEmail: z.string().email("Invalid email format").optional(),
  note: z.string().optional(),
  estCheckIn: z.date(),
  estCheckOut: z.date(),
});
