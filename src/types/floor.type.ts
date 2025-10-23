import { Request } from "express";
import { z } from "zod";

import { FloorUpsertSchema } from "../schema/floor.zod";

export type FloorUpsert = z.infer<typeof FloorUpsertSchema>;

export interface FloorUpsertRequest extends Request {
  body: FloorUpsert;
}
