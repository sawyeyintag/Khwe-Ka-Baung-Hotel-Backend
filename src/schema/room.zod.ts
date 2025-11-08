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

export const RoomQuerySchema = z.object({
  roomTypeId: z.string().optional(),
  floor: z.string().optional(),
});

export const RoomAvailabilityQuerySchema = z.object({
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  roomTypeId: z.string().optional(),
  floor: z.string().optional(),
});

export const RoomDetailQuerySchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});
