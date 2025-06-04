/*
  Warnings:

  - You are about to drop the column `numberOfGuests` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `roomStatusId` on the `session` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `sessionguest` DROP FOREIGN KEY `SessionGuest_guestId_fkey`;

-- DropIndex
DROP INDEX `SessionGuest_guestId_key` ON `sessionguest`;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `numberOfGuests`,
    DROP COLUMN `roomStatusId`;

