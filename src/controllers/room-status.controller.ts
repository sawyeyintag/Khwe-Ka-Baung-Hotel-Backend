import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { RoomStatusUpsertRequest } from "../types/room-status.type";

class RoomStatusController {
  async getAllRoomStatuses(req: Request, res: Response) {
    const roomStatuses = await prismaClient.roomStatus.findMany();
    return res.status(200).json({
      data: roomStatuses,
    });
  }

  async updateRoomStatus(req: RoomStatusUpsertRequest, res: Response) {
    const { id } = req.params;
    const { label } = req.body;
    const roomStatus = await prismaClient.roomStatus.findUnique({
      where: { id: Number(id) },
    });
    if (!roomStatus) {
      throw new NotFoundException("Room status not found");
    }
    const updatedRoomStatus = await prismaClient.roomStatus.update({
      where: { id: Number(id) },
      data: { label },
    });
    return res.status(200).json({
      data: updatedRoomStatus,
    });
  }
}

export default new RoomStatusController();
