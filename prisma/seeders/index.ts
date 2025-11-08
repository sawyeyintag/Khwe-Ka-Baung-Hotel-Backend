import { PrismaClient } from "@/generated/client";
import log from "@/utils/logger";

import { seedRoomTypes } from "./room-type.seeder";
import { seedRooms } from "./room.seeder";

const prisma = new PrismaClient();

interface SeederFunction {
  name: string;
  fn: (prisma: PrismaClient) => Promise<void>;
}

const seeders: SeederFunction[] = [
  { name: "Room Types", fn: seedRoomTypes }, // ✅ Run first - parent table
  { name: "Rooms", fn: seedRooms }, // ✅ Run second - child table
];

async function main() {
  try {
    log.info("Starting database seeding...");

    for (const seeder of seeders) {
      try {
        log.info(`Running ${seeder.name} seeder...`);
        await seeder.fn(prisma);
      } catch (error) {
        log.error(`Error in ${seeder.name} seeder:`, error);
        if (error instanceof Error) {
          log.error(`Error message: ${error.message}`);
          log.error(`Error stack: ${error.stack}`);
        }
        throw new Error(`Failed to seed ${seeder.name}`);
      }
    }

    log.info("Database seeding completed successfully!");
  } catch (error) {
    log.error("Database seeding failed:", error);
    if (error instanceof Error) {
      log.error(`Final error: ${error.message}`);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
