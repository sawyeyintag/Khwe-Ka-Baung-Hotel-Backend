/*
  Warnings:

  - You are about to drop the `guest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `guest`;

-- CreateTable
CREATE TABLE `Room` (
    `roomNumber` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomBeverage` (
    `roomNumber` INTEGER NOT NULL,
    `itemID` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`roomNumber`, `itemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomBeverage` ADD CONSTRAINT `RoomBeverage_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomBeverage` ADD CONSTRAINT `RoomBeverage_itemID_fkey` FOREIGN KEY (`itemID`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
