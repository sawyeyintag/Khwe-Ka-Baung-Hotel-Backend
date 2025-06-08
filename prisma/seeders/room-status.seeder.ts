import { PrismaClient } from "@prisma/client";
import { RoomStatusIds } from "@/shared/enums/RoomStatusIds";
import log from "@/utils/logger";

const roomStatuses = [
  { id: RoomStatusIds.AVAILABLE, label: "Available" },
  { id: RoomStatusIds.IN_SESSION, label: "In Session" },
  { id: RoomStatusIds.NOT_AVAILABLE, label: "Not Available" },
  { id: RoomStatusIds.BOOKED, label: "Booked" },
];

export async function seedRoomStatuses(prisma: PrismaClient) {
  for (const status of roomStatuses) {
    await prisma.roomStatus.upsert({
      where: { id: status.id },
      update: { label: status.label },
      create: status,
    });
  }

  log.info("✅ Room statuses seeded successfully.");
}
