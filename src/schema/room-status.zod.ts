import { z } from "zod";

export const RoomStatusUpsertSchema = z.object({
  label: z.string(),
});
