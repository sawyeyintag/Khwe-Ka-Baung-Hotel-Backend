-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_statusId_fkey`;

-- DropIndex
DROP INDEX `Room_statusId_fkey` ON `Room`;

-- AlterTable
ALTER TABLE `Room` MODIFY `statusId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `RoomStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
