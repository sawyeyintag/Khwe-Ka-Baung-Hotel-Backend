import { PrismaClient } from "@prisma/client";
import log from "@/utils/logger";

const floors = [{ floorNumber: 1 }, { floorNumber: 2 }];

export async function seedFloors(prisma: PrismaClient) {
  for (const floor of floors) {
    await prisma.floor.upsert({
      where: { floorNumber: floor.floorNumber },
      update: {},
      create: floor,
    });
  }

  log.info("✅ Floors seeded successfully.");
}
