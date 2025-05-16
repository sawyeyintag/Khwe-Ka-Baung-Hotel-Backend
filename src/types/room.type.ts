import { z } from "zod";
import { Request } from "express";
import { RoomUpsertSchema } from "../schema/room.zod";

type RoomUpsert = z.infer<typeof RoomUpsertSchema>;

export interface RoomUpsertRequest extends Request {
  body: RoomUpsert;
}
