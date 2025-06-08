-- Temporarily disable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;

-- Remove autoincrement from the id column
ALTER TABLE `roomstatus` MODIFY `id` INT NOT NULL;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;