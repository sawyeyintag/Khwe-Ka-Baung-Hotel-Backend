import { z } from "zod";
import { Request } from "express";
import { AdminCredentialsSchema } from "../schema/auth.zod";

// Data structures
type AdminCredentials = z.infer<typeof AdminCredentialsSchema>;

// Request types
export interface RegisterAdminRequest extends Request {
  body: AdminCredentials;
}

export interface LoginAdminRequest extends Request {
  body: AdminCredentials;
}
