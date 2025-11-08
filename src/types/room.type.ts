import { Request } from "express";
import { z } from "zod";

import { Booking, RoomType, Session } from "@/generated/client";

import { RoomCreateSchema, RoomEditSchema } from "../schema/room.zod";

export type Room = {
  roomNumber: string;
  floorNumber: number;
  roomType: RoomType;
  currentSession: Session | null;
  currentBooking: Booking | null;
};

type RoomCreateSchema = z.infer<typeof RoomCreateSchema>;

type RoomEditSchema = z.infer<typeof RoomEditSchema>;

export interface RoomCreateSchemaRequest extends Request {
  body: RoomCreateSchema;
}

export interface RoomEditSchemaRequest extends Request {
  body: RoomEditSchema;
  params: { roomNumber: string };
}
