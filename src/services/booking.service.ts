import { BadRequestsException } from "@/exceptions/bad-requests";
import prismaClient from "../config/prismaClient";
import { isBefore } from "date-fns";
import { BookingUpsertRequest } from "@/types/booking.type";
import { NotFoundException } from "@/exceptions/not-found";
import { SessionService } from "./session.service";

export class BookingService {
  static async checkOverlappingBooking(
    roomNumber: string,
    estCheckIn: Date,
    estCheckOut: Date
  ) {
    const overlappingBooking = await prismaClient.booking.findFirst({
      where: {
        roomNumber,
        estCheckIn,
        estCheckOut,
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

  static async validateBooking(req: BookingUpsertRequest) {
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

    await this.checkOverlappingBooking(roomNumber, estCheckIn, estCheckOut);

    await SessionService.checkOverlappingSession(
      roomNumber,
      estCheckIn,
      estCheckOut
    );
  }
}
