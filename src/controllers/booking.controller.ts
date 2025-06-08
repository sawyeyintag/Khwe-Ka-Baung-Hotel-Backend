import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { BookingUpsertRequest } from "../types/booking.type";
import { RoomStatusIds } from "../../shared/enums/RoomStatusIds";

import { isBefore } from "date-fns";

class BookingController {
  async validateBooking(req: BookingUpsertRequest) {
    const { roomNumber, estCheckIn, estCheckOut } = req.body;

    if (isBefore(new Date(estCheckOut), new Date(estCheckIn))) {
      throw new BadRequestsException("Check-out must be after check-in");
    }

    const room = await prismaClient.room.findUnique({
      where: { roomNumber },
    });

    if (!room) {
      throw new NotFoundException(`Room ${roomNumber} does not exist`);
    }

    if (room.statusId !== RoomStatusIds.AVAILABLE) {
      throw new BadRequestsException(
        `Room ${roomNumber} is marked as NOT_AVAILABLE`
      );
    }

    const overlappingBooking = await prismaClient.booking.findFirst({
      where: {
        roomNumber,
        estCheckIn: { lt: new Date(estCheckOut) },
        estCheckOut: { gt: new Date(estCheckIn) },
      },
    });

    if (overlappingBooking) {
      throw new BadRequestsException(
        `Room ${roomNumber} is already booked from ` +
          `${overlappingBooking.estCheckIn.toISOString()} to ` +
          `${overlappingBooking.estCheckOut.toISOString()}`
      );
    }
  }

  async createBooking(req: BookingUpsertRequest, res: Response) {
    const {
      roomNumber,
      guestId,
      contactName,
      contactPhone,
      contactEmail,
      estCheckIn,
      estCheckOut,
    } = req.body;

    await this.validateBooking(req);

    const createdBooking = await prismaClient.booking.create({
      data: {
        roomNumber,
        guestId,
        contactName,
        contactPhone,
        contactEmail,
        estCheckIn,
        estCheckOut,
      },
    });
    return res.status(201).json({
      data: createdBooking,
    });
  }

  async getAllBooking(req: Request, res: Response) {
    const bookings = await prismaClient.booking.findMany({
      include: {
        guest: true,
      },
    });
    return res.status(200).json({
      data: bookings,
    });
  }
}

export default new BookingController();
