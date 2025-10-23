import { Request } from "express";
import { z } from "zod";

import { RoomStatusUpsertSchema } from "../schema/room-status.zod";

type RommStatusUpsert = z.infer<typeof RoomStatusUpsertSchema>;

export interface RoomStatusUpsertRequest extends Request {
  body: RommStatusUpsert;
}
