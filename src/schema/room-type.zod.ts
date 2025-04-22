import { z } from "zod";

export const RoomTypeCreateSchema = z.object({
  name: z.string(),
  price: z.number(),
  pax: z.number().int(),
});
