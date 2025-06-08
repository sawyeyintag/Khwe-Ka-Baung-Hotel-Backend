import prismaClient from "../config/prismaClient";
import { SessionCreate } from "../types/session.type";

import { FloorUpsert } from "../types/floor.type";

class FloorService {
  async getAllFloors() {
    return await prismaClient.floor.findMany({
      include: {
        rooms: true,
      },
    });
  }
}

export default new FloorService();
