/*
  Warnings:

  - You are about to drop the column `priceInt` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "priceInt",
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;
