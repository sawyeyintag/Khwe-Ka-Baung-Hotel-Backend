/*
  Warnings:

  - The primary key for the `guest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `guest` table. All the data in the column will be lost.
  - The required column `uid` was added to the `Guest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `receipt` DROP FOREIGN KEY `Receipt_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `Room_guestId_fkey`;

-- DropIndex
DROP INDEX `Booking_guestId_fkey` ON `booking`;

-- DropIndex
DROP INDEX `Receipt_guestId_fkey` ON `receipt`;

-- DropIndex
DROP INDEX `Room_guestId_fkey` ON `room`;

-- AlterTable
ALTER TABLE `guest` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `uid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uid`);

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receipt` ADD CONSTRAINT `Receipt_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
