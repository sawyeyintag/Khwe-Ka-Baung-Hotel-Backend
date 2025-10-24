import { PrismaClient } from "@prisma/client";

import { roomTypes } from "@/shared/constants/roomTypes";
import log from "@/utils/logger";

export async function seedRoomTypes(prisma: PrismaClient) {
  for (const roomType of roomTypes) {
    const { name, priceWithBreakfast, priceWithoutBreakfast, pax } = roomType;
    await prisma.roomType.upsert({
      where: { id: roomType.id },
      update: {
        name,
        priceWithBreakfast,
        priceWithoutBreakfast,
        pax,
      },
      create: roomType,
    });
  }

  log.info("Room types seeded successfully.");
}
