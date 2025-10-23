import { z } from "zod";

export const GuestUpsertSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  nicCardNumber: z.string().optional(),
});
