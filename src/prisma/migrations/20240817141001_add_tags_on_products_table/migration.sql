-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "productTypeName" "ProductType" NOT NULL DEFAULT 'SCRUBS_AND_MASKS';

-- CreateTable
CREATE TABLE "TagsOnProducts" (
    "tagId" "Tag" NOT NULL,
    "productId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagsOnProducts_pkey" PRIMARY KEY ("tagId","productId")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_productTypeName_fkey" FOREIGN KEY ("productTypeName") REFERENCES "ProductTypes"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnProducts" ADD CONSTRAINT "TagsOnProducts_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnProducts" ADD CONSTRAINT "TagsOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
