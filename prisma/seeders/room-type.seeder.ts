import { PrismaClient } from "@prisma/client";
import log from "@/utils/logger";

import { roomTypes } from "@/shared/constants/roomTypes";

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
