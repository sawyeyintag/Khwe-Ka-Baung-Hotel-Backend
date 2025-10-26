import { Request, Response } from "express";

import prismaClient from "../config/prismaClient";

export class RoomController {
  static async getAllRooms(req: Request, res: Response) {
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
            checkInAt: { lte: checkDate },
            OR: [
              { checkInAt: { gte: checkDate } },
              { checkOutAt: null }, // Still checked in
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
}
