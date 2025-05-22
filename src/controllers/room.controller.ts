import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { RoomUpsertRequest } from "../types/room.type";

class RoomController {
  async createRoom(req: RoomUpsertRequest, res: Response) {
    const { roomNumber, floorNumber, roomTypeId } = req.body;
    const room = await prismaClient.room.findFirst({
      where: { roomNumber },
    });
    if (room) {
      throw new BadRequestsException("The room already exists");
    }
    const createdRoom = await prismaClient.room.create({
      data: { roomNumber, floorNumber, roomTypeId, statusId: 2 },
    });
    return res.status(201).json({
      data: createdRoom,
    });
  }

  async getAllRooms(req: Request, res: Response) {
    const rooms = await prismaClient.room.findMany({
      include: {
        roomType: true,
        status: true,
        session: true,
      },
    });

    const sanitizedRooms = rooms.map(
      ({ roomTypeId, statusId, sessionId, ...rest }) => rest
    );

    return res.status(200).json({
      data: sanitizedRooms,
    });
  }
}

export default new RoomController();
