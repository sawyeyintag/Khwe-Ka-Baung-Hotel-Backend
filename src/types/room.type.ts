import { Session } from "inspector/promises";

import { Request } from "express";
import { z } from "zod";

import { Booking, RoomType } from "@/generated/client";

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

export interface RoomGetAllRequest extends Request {
  query: {
    roomTypeId?: string;
    floor?: string;
    date?: string;
    isAvailable?: "true" | "false";
  };
}

export type RoomGetAllResponse = {
  data: {
    roomNumber: string;
    floorNumber: number;
    roomType: RoomType;
    currentSession: Session | null;
    currentBooking: Booking | null;
  }[];
};
