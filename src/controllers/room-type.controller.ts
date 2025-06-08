import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { NotFoundException } from "../exceptions/not-found";
import { RoomTypeUpsertRequest } from "../types/room-type.type";

class RoomTypeController {
  async getAllRoomTypes(req: Request, res: Response) {
    const roomTypes = await prismaClient.roomType.findMany({
      include: {
        rooms: true,
      },
    });
    return res.status(200).json({
      data: roomTypes,
    });
  }

  async updateRoomType(req: RoomTypeUpsertRequest, res: Response) {
    const { id } = req.params;
    const updatedRoomType = await prismaClient.roomType.update({
      where: { id: Number(id) },
      data: req.body,
    });
    return res.status(200).json({
      data: updatedRoomType,
    });
  }
}

export default new RoomTypeController();
