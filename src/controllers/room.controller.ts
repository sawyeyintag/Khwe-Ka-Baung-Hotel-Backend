import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import {
  RoomCreateSchemaRequest,
  RoomEditSchemaRequest,
  RoomGetAllRequest,
} from "../types/room.type";

class RoomController {
  async getAllRooms(req: RoomGetAllRequest, res: Response) {
    const { roomStatusId, roomTypeId, floor } = req.query;

    const rooms = await prismaClient.room.findMany({
      where: {
        ...(roomStatusId && { roomStatusId: Number(roomStatusId) }),
        ...(roomTypeId && { roomTypeId: Number(roomTypeId) }),
        ...(floor && { floorNumber: Number(floor) }),
      },
      include: {
        roomType: true,
        status: true,
        session: true,
      },
    });

    return res.status(200).json({
      data: rooms,
    });
  }

  async createRoom(req: RoomCreateSchemaRequest, res: Response) {
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

  async updateRoom(req: RoomEditSchemaRequest, res: Response) {
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

  async deleteRoom(req: Request, res: Response) {
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

export default new RoomController();
