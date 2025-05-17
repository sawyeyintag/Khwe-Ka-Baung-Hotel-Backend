import { z } from "zod";
import { Request } from "express";
import { GuestUpsertSchema } from "../schema/guest.zod";

type GuestUpsert = z.infer<typeof GuestUpsertSchema>;

export interface GuestUpsertRequest extends Request {
  body: GuestUpsert;
}
