import { Request, Response } from "express";

import prismaClient from "../config/prismaClient";

export class RoomController {
  // GET /rooms - Get all rooms with basic info (no date filtering)
  static async getAllRooms(req: Request, res: Response) {
    const { roomTypeId, floor } = req.query;

    const rooms = await prismaClient.room.findMany({
      where: {
        ...(roomTypeId && { roomTypeId: Number(roomTypeId) }),
        ...(floor && { floorNumber: Number(floor) }),
      },
      include: {
        roomType: true,
      },
      orderBy: {
        roomNumber: "asc",
      },
    });

    return res.status(200).json({
      data: rooms,
    });
  }

  // GET /rooms/:roomNumber - Get specific room details with sessions/bookings
  static async getRoomByNumber(req: Request, res: Response) {
    const { roomNumber } = req.params;
    const { startDate, endDate } = req.query;

    const room = await prismaClient.room.findUnique({
      where: {
        roomNumber: roomNumber,
      },
      include: {
        roomType: true,
        sessions: {
          where:
            startDate && endDate
              ? {
                  checkInAt: { lte: new Date(endDate as string) },
                  OR: [
                    { checkOutAt: { gte: new Date(startDate as string) } },
                    { checkOutAt: null }, // Still checked in
                  ],
                }
              : undefined,
          orderBy: {
            checkInAt: "desc",
          },
        },
        bookings: {
          where:
            startDate && endDate
              ? {
                  estCheckIn: { lte: new Date(endDate as string) },
                  estCheckOut: { gte: new Date(startDate as string) },
                }
              : undefined,
          orderBy: {
            estCheckIn: "desc",
          },
        },
      },
    });

    if (!room) {
      return res.status(404).json({
        error: "Room not found",
      });
    }

    // Check if room is available during the specified period
    const isAvailable =
      room.sessions.length === 0 && room.bookings.length === 0;

    return res.status(200).json({
      data: {
        ...room,
        isAvailable,
      },
    });
  }

  // GET /rooms/available - Get available rooms for a date range
  static async getAvailableRooms(req: Request, res: Response) {
    const { startDate, endDate, roomTypeId, floor } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({
        error: "startDate and endDate are required",
      });
    }

    const rooms = await prismaClient.room.findMany({
      where: {
        ...(roomTypeId && { roomTypeId: Number(roomTypeId) }),
        ...(floor && { floorNumber: Number(floor) }),
      },
      include: {
        roomType: true,
        sessions: {
          where: {
            checkInAt: { lte: new Date(endDate as string) },
            OR: [
              { checkOutAt: { gte: new Date(startDate as string) } },
              { checkOutAt: null },
            ],
          },
        },
        bookings: {
          where: {
            estCheckIn: { lte: new Date(endDate as string) },
            estCheckOut: { gte: new Date(startDate as string) },
          },
        },
      },
    });

    // Filter only available rooms (no overlapping sessions or bookings)
    const availableRooms = rooms
      .filter(
        (room) => room.sessions.length === 0 && room.bookings.length === 0
      )
      .map((room) => ({
        roomNumber: room.roomNumber,
        floorNumber: room.floorNumber,
        roomType: room.roomType,
      }));

    return res.status(200).json({
      data: availableRooms,
    });
  }
}
