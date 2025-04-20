/*
  Warnings:

  - You are about to drop the column `quantity` on the `item` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `item` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `room` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `room` table. All the data in the column will be lost.
  - You are about to drop the `roombeverage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomTypeId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `roombeverage` DROP FOREIGN KEY `RoomBeverage_itemID_fkey`;

-- DropForeignKey
ALTER TABLE `roombeverage` DROP FOREIGN KEY `RoomBeverage_roomNumber_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `quantity`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `room` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    DROP COLUMN `roomNumber`,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `roomTypeId` INTEGER NOT NULL,
    ADD COLUMN `statusId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`number`);

-- DropTable
DROP TABLE `roombeverage`;

-- CreateTable
CREATE TABLE `Inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `Inventory_itemId_key`(`itemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventoryLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inventoryId` INTEGER NOT NULL,
    `type` ENUM('ADD', 'USE') NOT NULL,
    `quantity` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiniBar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomNumber` INTEGER NOT NULL,
    `itemId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `MiniBar_roomNumber_itemId_key`(`roomNumber`, `itemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiniBarLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `minibarId` INTEGER NOT NULL,
    `type` ENUM('ADD', 'USE') NOT NULL,
    `quantity` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomId` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `pax` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventoryLog` ADD CONSTRAINT `InventoryLog_inventoryId_fkey` FOREIGN KEY (`inventoryId`) REFERENCES `Inventory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniBar` ADD CONSTRAINT `MiniBar_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`number`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniBar` ADD CONSTRAINT `MiniBar_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniBarLog` ADD CONSTRAINT `MiniBarLog_minibarId_fkey` FOREIGN KEY (`minibarId`) REFERENCES `MiniBar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_roomTypeId_fkey` FOREIGN KEY (`roomTypeId`) REFERENCES `RoomType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `RoomStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomLog` ADD CONSTRAINT `RoomLog_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`number`) ON DELETE RESTRICT ON UPDATE CASCADE;
