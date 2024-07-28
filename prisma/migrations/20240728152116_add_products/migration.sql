-- CreateTable
CREATE TABLE "Products" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "categoryName" "Category" NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
