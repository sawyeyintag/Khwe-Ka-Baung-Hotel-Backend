import { z } from "zod";

export const RoomCreateSchema = z.object({
  roomNumber: z
    .string()
    .regex(/^\d{3}$/, "Room number must be a 3-digit number"),
  floorNumber: z.number().min(1, "Floor number must be a positive integer"),
  roomTypeId: z.number().min(1, "Room type ID must be a positive integer"),
});

export const RoomEditSchema = z.object({
  floorNumber: z
    .number()
    .min(1, "Floor number must be a positive integer")
    .optional(),
  roomTypeId: z
    .number()
    .min(1, "Room type ID must be a positive integer")
    .optional(),
});
