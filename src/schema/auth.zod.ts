import { z } from "zod";

export const AdminCredentialsSchema = z.object({
  username: z.string(),
  password: z.string(),
});
