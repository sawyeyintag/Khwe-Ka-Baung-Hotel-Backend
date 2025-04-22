import { z } from "zod";

export const AdminRegisterSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const AdminLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
