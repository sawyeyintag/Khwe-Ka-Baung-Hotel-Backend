import { PrismaClient } from "@prisma/client";
import log from "@/utils/logger";

import { rooms } from "@/shared/constants/rooms";

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
