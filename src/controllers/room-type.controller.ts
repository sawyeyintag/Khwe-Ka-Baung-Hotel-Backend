import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { NotFoundException } from "../exceptions/not-found";
import { RoomTypeUpsertRequest } from "../types/room-type.type";

class RoomTypeController {
  async createRoomType(req: RoomTypeUpsertRequest, res: Response) {
    const { name, pax, price } = req.body;
    const createdRoomType = await prismaClient.roomType.create({
      data: { name, pax, price },
    });
    return res.status(201).json({
      data: createdRoomType,
    });
  }

  async getAllRoomTypes(req: Request, res: Response) {
    const roomTypes = await prismaClient.roomType.findMany({
      include: {
        rooms: true,
      },
    });
    if (!roomTypes.length) {
      throw new NotFoundException("No room types found");
    }
    return res.status(200).json({
      data: roomTypes,
    });
  }

  async updateRoomType(req: RoomTypeUpsertRequest, res: Response) {
    const { id } = req.params;
    const { name, pax, price } = req.body;
    const updatedRoomType = await prismaClient.roomType.update({
      where: { id: Number(id) },
      data: { name, pax, price },
    });
    return res.status(200).json({
      data: updatedRoomType,
    });
  }
}

export default new RoomTypeController();
