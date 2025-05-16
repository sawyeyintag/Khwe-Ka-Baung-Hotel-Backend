import { z } from "zod";
import { Request } from "express";
import { RoomTypeUpsertSchema } from "../schema/room-type.zod";

type RoomTypeUpsert = z.infer<typeof RoomTypeUpsertSchema>;

export interface RoomTypeUpsertRequest extends Request {
  body: RoomTypeUpsert;
}
