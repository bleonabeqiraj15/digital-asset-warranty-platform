/*
  Warnings:

  - You are about to drop the column `status` on the `Quote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "status";

-- DropEnum
DROP TYPE "QuoteStatus";
