import { Request, Response } from "express";

import { BookingService } from "@/services/booking.service";

import prismaClient from "../config/prismaClient";
import { BookingUpsertRequest } from "../types/booking.type";

export class BookingController {
  async createBooking(req: BookingUpsertRequest, res: Response) {
    const {
      roomNumber,
      contactName,
      contactPhone,
      contactEmail,
      estCheckIn,
      estCheckOut,
    } = req.body;

    await BookingService.validateBooking(req);

    const createdBooking = await prismaClient.booking.create({
      data: {
        roomNumber,
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
    const bookings = await prismaClient.booking.findMany({});
    return res.status(200).json({
      data: bookings,
    });
  }
}
