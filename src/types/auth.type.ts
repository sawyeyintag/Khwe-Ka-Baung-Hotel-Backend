import { Request } from "express";
import { z } from "zod";

import { AdminRegisterSchema } from "../schema/auth.zod";

// Data structures
type AdminCredentials = z.infer<typeof AdminRegisterSchema>;

// Request types
export interface RegisterAdminRequest extends Request {
  body: AdminCredentials;
}

export interface LoginAdminRequest extends Request {
  body: AdminCredentials;
}
