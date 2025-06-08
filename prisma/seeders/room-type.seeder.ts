import { PrismaClient } from "@prisma/client";
import { RoomTypeIds } from "@/shared/enums/RoomTypeIds";
import log from "@/utils/logger";

const roomTypes = [
  {
    id: RoomTypeIds.SINGLE_BEDS_ROOM,
    name: "Single Beds Room",
    price: 60000,
    pax: 2,
  },
  {
    id: RoomTypeIds.DOUBLE_BED_ROOM,
    name: "Double Bed Room",
    price: 60000,
    pax: 2,
  },
  {
    id: RoomTypeIds.TRIPLE_BED_ROOM,
    name: "Triple Bed Room",
    price: 70000,
    pax: 3,
  },
  {
    id: RoomTypeIds.FAMMILY_ROOM,
    name: "Family Room",
    price: 85000,
    pax: 4,
  },
];

export async function seedRoomTypes(prisma: PrismaClient) {
  for (const roomType of roomTypes) {
    await prisma.roomType.upsert({
      where: { id: roomType.id },
      update: {
        name: roomType.name,
        price: roomType.price,
        pax: roomType.pax,
      },
      create: roomType,
    });
  }

  log.info("✅ Room types seeded successfully.");
}
