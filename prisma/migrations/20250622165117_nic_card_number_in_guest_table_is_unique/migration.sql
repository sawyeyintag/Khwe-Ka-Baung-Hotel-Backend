/*
  Warnings:

  - A unique constraint covering the columns `[nicCardNum]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Guest_nicCardNum_key` ON `Guest`(`nicCardNum`);
