import { z } from "zod";

export const RegisterSchema = z.object({
  userName: z.string(),
  password: z.string(),
});
