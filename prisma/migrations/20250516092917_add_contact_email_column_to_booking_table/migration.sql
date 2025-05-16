/*
  Warnings:

  - Added the required column `contactEmail` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `contactEmail` VARCHAR(191) NOT NULL;
