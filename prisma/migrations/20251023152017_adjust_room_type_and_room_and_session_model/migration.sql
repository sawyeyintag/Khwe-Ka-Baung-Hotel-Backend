/*
  Warnings:

  - You are about to drop the column `price` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Session` table. All the data in the column will be lost.
  - Added the required column `PriceWithBreakfast` to the `RoomType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PriceWithoutBreakfast` to the `RoomType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomPrice` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Room` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `RoomType` ADD COLUMN `PriceWithBreakfast` DOUBLE NOT NULL,
    ADD COLUMN `PriceWithoutBreakfast` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Session` DROP COLUMN `discount`,
    ADD COLUMN `roomPrice` DOUBLE NOT NULL;
