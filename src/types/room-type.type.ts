import { z } from "zod";
import { Request } from "express";
import { RoomTypeCreateSchema } from "../schema/room-type.zod";

type RoomTypeCreate = z.infer<typeof RoomTypeCreateSchema>;

export interface RoomTypeCreateRequest extends Request {
  body: RoomTypeCreate;
}
