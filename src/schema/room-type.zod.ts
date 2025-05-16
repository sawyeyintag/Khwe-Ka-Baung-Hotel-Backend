import { z } from "zod";

export const RoomTypeUpsertSchema = z.object({
  name: z.string(),
  price: z.number(),
  pax: z.number().int(),
});
