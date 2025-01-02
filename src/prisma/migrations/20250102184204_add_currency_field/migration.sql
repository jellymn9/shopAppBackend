-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR', 'JPY', 'RSD');

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'EUR';
