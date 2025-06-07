import { z } from "zod";
import { Request } from "express";
import { FloorUpsertSchema } from "../schema/floor.zod";

export type FloorUpsert = z.infer<typeof FloorUpsertSchema>;

export interface FloorUpsertRequest extends Request {
  body: FloorUpsert;
}
