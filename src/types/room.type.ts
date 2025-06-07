import { z } from "zod";
import { Request } from "express";
import { RoomCreateSchema } from "../schema/room.zod";

type RoomCreateSchema = z.infer<typeof RoomCreateSchema>;

type RoomEditSchema = Omit<RoomCreateSchema, "roomNumber">;

export interface RoomCreateSchemaRequest extends Request {
  body: RoomCreateSchema;
}

export interface RoomEditSchemaRequest extends Request {
  body: RoomEditSchema;
  params: { roomNumber: string };
}
