/*
  Warnings:

  - You are about to drop the `sessionguest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `sessionguest` DROP FOREIGN KEY `SessionGuest_sessionId_fkey`;

-- AlterTable
ALTER TABLE `session` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `actualCheckOut` DATETIME(3) NULL;

-- DropTable
DROP TABLE `sessionguest`;

-- CreateTable
CREATE TABLE `_GuestToSession` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GuestToSession_AB_unique`(`A`, `B`),
    INDEX `_GuestToSession_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GuestToSession` ADD CONSTRAINT `_GuestToSession_A_fkey` FOREIGN KEY (`A`) REFERENCES `Guest`(`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GuestToSession` ADD CONSTRAINT `_GuestToSession_B_fkey` FOREIGN KEY (`B`) REFERENCES `Session`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
