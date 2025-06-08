import { z } from "zod";

export const RoomTypeUpsertSchema = z.object({
  name: z.string(),
  priceWithBreakfast: z.number().int(),
  priceWithoutBreakfast: z.number().int(),
  pax: z.number().int(),
});
