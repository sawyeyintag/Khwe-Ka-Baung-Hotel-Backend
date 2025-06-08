import { PrismaClient } from "@/generated/client";
import { seedRoomStatuses } from "./room-status.seeder";
import { seedFloors } from "./floor.seeder";
import { seedRoomTypes } from "./room-type.seeder";
import { seedRooms } from "./room.seeder";
import log from "@/utils/logger";

const prisma = new PrismaClient();

interface SeederFunction {
  name: string;
  fn: (prisma: PrismaClient) => Promise<void>;
}

const seeders: SeederFunction[] = [
  { name: "Room Statuses", fn: seedRoomStatuses },
  { name: "Floors", fn: seedFloors },
  { name: "Room Types", fn: seedRoomTypes },
  { name: "Rooms", fn: seedRooms },
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
        throw new Error(`Failed to seed ${seeder.name}`);
      }
    }

    log.info("Database seeding completed successfully!");
  } catch (error) {
    log.error("Database seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
