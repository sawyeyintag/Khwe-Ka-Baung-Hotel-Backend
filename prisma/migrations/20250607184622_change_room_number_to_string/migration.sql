/*
  Warnings:

  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_roomNumber_fkey`;

-- DropForeignKey
ALTER TABLE `minibar` DROP FOREIGN KEY `MiniBar_roomNumber_fkey`;

-- DropForeignKey
ALTER TABLE `receipt` DROP FOREIGN KEY `Receipt_roomNumber_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_roomNumber_fkey`;

-- DropIndex
DROP INDEX `Booking_roomNumber_fkey` ON `booking`;

-- DropIndex
DROP INDEX `Receipt_roomNumber_fkey` ON `receipt`;

-- AlterTable
ALTER TABLE `booking` MODIFY `roomNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `minibar` MODIFY `roomNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `receipt` MODIFY `roomNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `room` DROP PRIMARY KEY,
    MODIFY `roomNumber` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`roomNumber`);

-- AlterTable
ALTER TABLE `session` MODIFY `roomNumber` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniBar` ADD CONSTRAINT `MiniBar_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receipt` ADD CONSTRAINT `Receipt_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;
