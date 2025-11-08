/*
  Warnings:

  - Added the required column `pax` to the `RoomType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `roomtype` ADD COLUMN `pax` INTEGER NOT NULL;
