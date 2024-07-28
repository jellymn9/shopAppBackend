-- CreateEnum
CREATE TYPE "Category" AS ENUM ('OIL', 'FLORAL_WATER', 'SOAP');

-- CreateTable
CREATE TABLE "Categories" (
    "name" "Category" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");
