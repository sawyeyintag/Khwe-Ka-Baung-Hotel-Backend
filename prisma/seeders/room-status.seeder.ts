import { PrismaClient } from "@prisma/client";
import log from "@/utils/logger";

import { roomStatuses } from "@/shared/constants/roomStatuses";

export async function seedRoomStatuses(prisma: PrismaClient) {
  for (const status of roomStatuses) {
    await prisma.roomStatus.upsert({
      where: { id: status.id },
      update: { label: status.label },
      create: status,
    });
  }

  log.info("Room statuses seeded successfully.");
}
