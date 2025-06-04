import { z } from "zod";

export const RoomUpsertSchema = z.object({
  roomNumber: z.number().min(3, "Room number must be a positive integer"),
  floorNumber: z.number().min(1, "Floor number must be a positive integer"),
  roomTypeId: z.number().min(1, "Room type ID must be a positive integer"),
});
