-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('SCRUBS_AND_MASKS', 'NATURAL_DEODORANTS', 'HAIR_OILD_AND_SERUMS', 'SOLID_SHAMPOOS_AND_HAIR_SOAPS', 'EAU_DE_TOILETE');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('VEGAN_COSMETICS', 'ORGANIC_COSMETICS', 'HANDMADE_COSMETICS', 'SUMMER_ESSENTIALS', 'GIFTS');

-- CreateTable
CREATE TABLE "ProductTypes" (
    "name" "ProductType" NOT NULL
);

-- CreateTable
CREATE TABLE "Tags" (
    "name" "Tag" NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductTypes_name_key" ON "ProductTypes"("name");
