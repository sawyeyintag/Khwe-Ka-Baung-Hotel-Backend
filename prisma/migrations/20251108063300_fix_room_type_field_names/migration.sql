/*
  Warnings:

  - You are about to drop the column `PriceWithBreakfast` on the `roomtype` table. All the data in the column will be lost.
  - You are about to drop the column `PriceWithoutBreakfast` on the `roomtype` table. All the data in the column will be lost.
  - Added the required column `priceWithBreakfast` to the `RoomType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceWithoutBreakfast` to the `RoomType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `roomtype` DROP COLUMN `PriceWithBreakfast`,
    DROP COLUMN `PriceWithoutBreakfast`,
    ADD COLUMN `priceWithBreakfast` DOUBLE NOT NULL,
    ADD COLUMN `priceWithoutBreakfast` DOUBLE NOT NULL;
