-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_guestId_fkey`;

-- DropIndex
DROP INDEX `Booking_guestId_fkey` ON `Booking`;

-- AlterTable
ALTER TABLE `Booking` MODIFY `guestId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
