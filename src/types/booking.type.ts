import { Request } from "express";
import { z } from "zod";

import { BookingUpsertSchema } from "../schema/booking.zod";

type BookingUpsert = z.infer<typeof BookingUpsertSchema>;

export interface BookingUpsertRequest extends Request {
  body: BookingUpsert;
}
