import { z } from "zod";

export const BookingUpsertSchema = z.object({
  roomNumber: z.number().min(3, "Room number must be a positive integer"),
  guestId: z.string().min(1, "Guest name is required").optional(),
  contactName: z.string().min(1, "Contact name is required"),
  contactPhone: z.string().min(1, "Contact phone is required"),
  contactEmail: z.string().email("Invalid email format").optional(),
  estCheckIn: z.date(),
  estCheckOut: z.date(),
});
