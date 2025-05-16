import { z } from "zod";

export const FloorUpsertSchema = z.object({
  floorNumber: z.number().int(),
});
