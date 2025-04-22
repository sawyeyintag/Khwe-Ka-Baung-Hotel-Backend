import { z } from "zod";

export const FloorCreateSchema = z.object({
  floorNumber: z.number().int(),
});
