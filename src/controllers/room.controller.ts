import { Request, Response } from "express";

import prismaClient from "../config/prismaClient";
import { BadRequestsException } from "../exceptions/bad-requests";
import {
  RoomCreateSchemaRequest,
  RoomEditSchemaRequest,
  RoomGetAllRequest,
  RoomGetAllResponse,
} from "../types/room.type";

export class RoomController {
  static async getAllRooms(
    req: RoomGetAllRequest,
    res: Response
  ): Promise<Response<RoomGetAllResponse>> {
    const { roomTypeId, floor, date, isAvailable } = req.query;

    // Use current date if not provided
    const checkDate = date ? new Date(date as string) : new Date();

    const rooms = await prismaClient.room.findMany({
      where: {
        ...(roomTypeId && { roomTypeId: Number(roomTypeId) }),
        ...(floor && { floorNumber: Number(floor) }),
      },
      include: {
        roomType: true,
        // Include active sessions that overlap with the check date
        sessions: {
          where: {
            checkedInAt: { lte: checkDate },
            OR: [
              { checkedOutAt: { gte: checkDate } },
              { checkedOutAt: null }, // Still checked in
            ],
          },
        },
        // Include bookings that overlap with the check date
        bookings: {
          where: {
            estCheckIn: { lte: checkDate },
            estCheckOut: { gte: checkDate },
          },
        },
      },
    });

    // Map rooms with current session and booking
    const roomsWithStatus = rooms.map((room) => ({
      roomNumber: room.roomNumber,
      floorNumber: room.floorNumber,
      roomType: room.roomType,
      currentSession: room.sessions.length > 0 ? room.sessions[0] : null,
      currentBooking: room.bookings.length > 0 ? room.bookings[0] : null,
    }));

    // Filter by availability if requested
    const filteredRooms = isAvailable
      ? roomsWithStatus.filter((room) => {
          const shouldBeAvailable = isAvailable === "true";
          const roomIsAvailable = !room.currentSession && !room.currentBooking;
          return roomIsAvailable === shouldBeAvailable;
        })
      : roomsWithStatus;

    return res.status(200).json({
      data: filteredRooms,
    });
  }

  static async createRoom(req: RoomCreateSchemaRequest, res: Response) {
    const { roomNumber, floorNumber, roomTypeId } = req.body;
    const room = await prismaClient.room.findFirst({
      where: { roomNumber },
    });
    if (room) {
      throw new BadRequestsException("The room already exists");
    }
    const createdRoom = await prismaClient.room.create({
      data: { roomNumber, floorNumber, roomTypeId },
    });
    return res.status(201).json({
      data: createdRoom,
    });
  }

  static async updateRoom(req: RoomEditSchemaRequest, res: Response) {
    const { floorNumber, roomTypeId } = req.body;
    const { roomNumber } = req.params;

    const room = await prismaClient.room.findUnique({
      where: { roomNumber },
    });
    if (!room) {
      throw new BadRequestsException("Room not found");
    }

    const updatedRoom = await prismaClient.room.update({
      where: { roomNumber },
      data: { roomNumber, floorNumber, roomTypeId },
    });

    return res.status(200).json({
      data: updatedRoom,
    });
  }

  static async deleteRoom(req: Request, res: Response) {
    const { roomNumber } = req.params;

    const room = await prismaClient.room.findUnique({
      where: { roomNumber },
    });
    if (!room) {
      throw new BadRequestsException("Room not found");
    }

    await prismaClient.room.delete({
      where: { roomNumber },
    });

    return res.status(204).send();
  }
}
