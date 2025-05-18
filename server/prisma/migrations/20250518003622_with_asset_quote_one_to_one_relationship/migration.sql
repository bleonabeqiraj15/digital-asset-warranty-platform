/*
  Warnings:

  - You are about to drop the column `userId` on the `Asset` table. All the data in the column will be lost.
  - The primary key for the `Quote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Quote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[quoteId]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assetId]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `category` on the `Asset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Quote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AssetCategory" AS ENUM ('ELECTRONICS', 'WATCHES', 'COLLECTIBLES');

-- CreateEnum
CREATE TYPE "QuoteStatus" AS ENUM ('PENDING', 'ACCEPTED', 'EXPIRED');

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "userId",
ADD COLUMN     "quoteId" TEXT,
DROP COLUMN "category",
ADD COLUMN     "category" "AssetCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "status",
ADD COLUMN     "status" "QuoteStatus" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_quoteId_key" ON "Asset"("quoteId");

-- CreateIndex
CREATE UNIQUE INDEX "Quote_assetId_key" ON "Quote"("assetId");
