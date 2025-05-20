-- First, drop the foreign key constraints
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_guestId_fkey`;

ALTER TABLE `Receipt` DROP FOREIGN KEY `Receipt_guestId_fkey`;

ALTER TABLE `Room` DROP FOREIGN KEY `Room_guestId_fkey`;

-- Now we can safely drop the indices (if needed)
-- DROP INDEX `Booking_guestId_fkey` ON `Booking`;
-- DROP INDEX `Receipt_guestId_fkey` ON `Receipt`;
-- DROP INDEX `Room_guestId_fkey` ON `Room`;

-- Drop the old table
DROP TABLE `guest`;

-- Create the new table
CREATE TABLE `Guest` (
    `uid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `nicCardNum` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Add the new foreign key constraints
ALTER TABLE `Booking`
ADD CONSTRAINT `Booking_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE `Receipt`
ADD CONSTRAINT `Receipt_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest` (`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Room`
ADD CONSTRAINT `Room_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE;