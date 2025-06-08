import { PrismaClient } from "@/generated/client";
import { seedRoomStatuses } from "./room-status.seeder";
import { seedFloors } from "./floor.seeder";
import { seedRoomTypes } from "./room-type.seeder";
import log from "@/utils/logger";

const prisma = new PrismaClient();

async function main() {
  try {
    log.info("Starting database seeding...");

    await seedRoomStatuses(prisma);
    await seedFloors(prisma);
    await seedRoomTypes(prisma);

    log.info("Database seeding completed successfully!");
  } catch (error) {
    log.error("Error during seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
