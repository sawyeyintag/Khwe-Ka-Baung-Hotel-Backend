import { z } from "zod";
import { Request } from "express";
import { RoomCreateSchema } from "../schema/room.zod";

type RoomCreate = z.infer<typeof RoomCreateSchema>;

export interface RoomUpsertRequest extends Request {
  body: RoomCreate;
}
