import prismaClient from "../config/prismaClient";
import { BadRequestsException } from "../exceptions/bad-requests";
import { RoomCreateRequest } from "../types/room.type";

class RoomController {
  async createRoom(req: RoomCreateRequest, res: Response) {
    const { roomNumber, roomTypeId } = req.body;
    const room = await prismaClient.room.findFirst({
      where: { roomNumber },
    });
    if (room) {
      throw new BadRequestsException("The room already exists");
    }
    await prismaClient.room.create({
      data,
    });
  }
}

export default new RoomController();
