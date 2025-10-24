import { PrismaClient } from "@prisma/client";

import { rooms } from "@/shared/constants/rooms";
import log from "@/utils/logger";

export async function seedRooms(prisma: PrismaClient) {
  for (const room of rooms) {
    const { roomNumber, floorNumber, roomTypeId, statusId } = room;
    await prisma.room.upsert({
      where: { roomNumber },
      update: {
        floorNumber,
        roomTypeId,
        statusId,
      },
      create: {
        roomNumber,
        floorNumber,
        roomTypeId,
        statusId,
      },
    });
  }

  log.info("Rooms seeded successfully.");
}
