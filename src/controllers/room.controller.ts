import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { RoomCreateRequest } from "../types/room.type";

class RoomController {
  async createRoom(req: RoomCreateRequest, res: Response) {
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

  async getAllRooms(req: Request, res: Response) {
    const rooms = await prismaClient.room.findMany({
      include: {
        roomType: true,
      },
    });
    if (!rooms.length) {
      throw new NotFoundException("No rooms found");
    }
    return res.json(200).json({
      data: rooms,
    });
  }
}

export default new RoomController();
