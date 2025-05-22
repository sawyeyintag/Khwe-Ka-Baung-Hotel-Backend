/*
  Warnings:

  - You are about to drop the column `actualCheckIn` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `actualCheckOut` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `guestId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `numExtraBed` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `numOfGuests` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionId]` on the table `Room` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_guestId_fkey`;

-- DropIndex
DROP INDEX `Room_guestId_fkey` ON `Room`;

-- AlterTable
ALTER TABLE `Room` DROP COLUMN `actualCheckIn`,
    DROP COLUMN `actualCheckOut`,
    DROP COLUMN `guestId`,
    DROP COLUMN `numExtraBed`,
    DROP COLUMN `numOfGuests`,
    ADD COLUMN `sessionId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomStatusId` INTEGER NOT NULL,
    `numberOfGuests` INTEGER NOT NULL,
    `numberOfExtraBeds` INTEGER NOT NULL,
    `actualCheckIn` DATETIME(3) NOT NULL,
    `actualCheckOut` DATETIME(3) NOT NULL,
    `roomNumber` INTEGER NOT NULL,

    UNIQUE INDEX `Session_roomNumber_key`(`roomNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionGuest` (
    `sessionId` INTEGER NOT NULL,
    `guestId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SessionGuest_guestId_key`(`guestId`),
    PRIMARY KEY (`sessionId`, `guestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Room_sessionId_key` ON `Room`(`sessionId`);

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionGuest` ADD CONSTRAINT `SessionGuest_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionGuest` ADD CONSTRAINT `SessionGuest_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
