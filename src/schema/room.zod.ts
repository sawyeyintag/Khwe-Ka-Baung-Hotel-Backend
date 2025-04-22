import { z } from "zod";

export const RoomSchema = z.object({
  roomNumber: z.number().min(3, "Room number must be a positive integer"),
  floorNumber: z.number().min(1, "Floor number must be a positive integer"),
  roomTypeId: z.number().min(1, "Room type ID must be a positive integer"),
  statusId: z.number().int().nullable().optional(),
  guestId: z.string().nullable().optional(),
  numOfGuests: z.number().int().nullable().optional(),
  numExtraBed: z.number().int().nullable().optional(),
  actualCheckIn: z.date().nullable().optional(),
  actualCheckOut: z.date().nullable().optional(),
});

export const RoomCreateSchema = z.object({
  roomNumber: z.number().min(3, "Room number must be a positive integer"),
  floorNumber: z.number().min(1, "Floor number must be a positive integer"),
  roomTypeId: z.number().min(1, "Room type ID must be a positive integer"),
});
