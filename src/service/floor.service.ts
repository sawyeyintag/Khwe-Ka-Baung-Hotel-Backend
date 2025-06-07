import prismaClient from "../config/prismaClient";
import { SessionCreate } from "../types/session.type";

import { FloorUpsert } from "../types/floor.type";

class FloorService {
  async createFloor(floorCreate: FloorUpsert) {
    return await prismaClient.floor.create({
      data: floorCreate,
    });
  }

  async getAllFloors() {
    return await prismaClient.floor.findMany({
      include: {
        rooms: true,
      },
    });
  }

  async deleteFloor(floorNumber: number) {
    return await prismaClient.floor.delete({
      where: { floorNumber },
    });
  }
}

export default new FloorService();
