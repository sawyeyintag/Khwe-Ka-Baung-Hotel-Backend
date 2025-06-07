import { z } from "zod";
import { Request } from "express";
import { RoomCreateSchema, RoomEditSchema } from "../schema/room.zod";

type RoomCreateSchema = z.infer<typeof RoomCreateSchema>;

type RoomEditSchema = z.infer<typeof RoomEditSchema>;

export interface RoomCreateSchemaRequest extends Request {
  body: RoomCreateSchema;
}

export interface RoomEditSchemaRequest extends Request {
  body: RoomEditSchema;
  params: { roomNumber: string };
}
