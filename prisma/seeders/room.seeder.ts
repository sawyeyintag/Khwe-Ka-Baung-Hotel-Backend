import { PrismaClient } from "@prisma/client";

import { rooms } from "@/shared/constants/rooms";
import log from "@/utils/logger";

export async function seedRooms(prisma: PrismaClient) {
  for (const room of rooms) {
    const { roomNumber, floorNumber, roomTypeId } = room;
    await prisma.room.upsert({
      where: { roomNumber },
      update: {
        floorNumber,
        roomTypeId,
      },
      create: {
        roomNumber,
        floorNumber,
        roomTypeId,
      },
    });
  }

  log.info("Rooms seeded successfully.");
}
