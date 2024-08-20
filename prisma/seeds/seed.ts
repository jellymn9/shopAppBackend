import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  //users
  const dummyPassword = "asdf_asdf";
  const hashedPassword = await bcrypt.hash(dummyPassword, 10);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const alice = await prisma.users.upsert({
  //   where: { email: "jeca@jeca.com" },
  //   update: {},
  //   create: {
  //     id: "3bf9e7e0-1d14-4b6e-a1b8-a38f215e8d05",
  //     email: "alice@prisma.io",
  //     username: "Alice",
  //     password: hashedPassword,
  //   },
  // });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const bob = await prisma.users.upsert({
  //   where: { email: "bob@bob.io" },
  //   update: {},
  //   create: {
  //     id: "137e03be-59d0-4805-a15c-44b5f4c1b3ce",
  //     email: "bob@prisma.io",
  //     username: "Bob",
  //     password: hashedPassword,
  //   },
  // });
  //categories
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const categories = await prisma.categories.createMany({
    data: [
      { name: "FLORAL_WATER" },
      { name: "OIL" },
      { name: "SOAP" },
      { name: "CREAM" },
    ],
    skipDuplicates: true,
  });
  //products
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lavanderOil = await prisma.products.upsert({
    where: { id: "9ecacacc-9cef-4ef0-ab5d-d8f0ba0338a5" },
    update: {},
    create: {
      id: "9ecacacc-9cef-4ef0-ab5d-d8f0ba0338a5",
      name: "Lavander oil",
      price: "234$",
      image: "some_image",
      category: {
        create: {
          name: "OIL",
        },
      },
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const manyProducts = await prisma.products.createMany({
    data: [
      {
        id: "011fda23-ea15-4543-9a13-6b932c8c0676",
        name: "lavander hair shampoo",
        price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
      },
      {
        id: "ae825c6e-daa8-4568-9117-b9473fa01f7d",
        name: "Pear body scrub",
        price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SCRUBS_AND_MASKS",
      },
      {
        id: "08118746-82a3-43bc-9339-d13a1599dae7",
        name: "Pear hair mask",
        price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SCRUBS_AND_MASKS",
      },
      {
        id: "ce88cfed-0343-4206-8d64-68b43059e209",
        name: "Pine deodorant",
        price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "NATURAL_DEODORANTS",
      },
      {
        id: "36ae2d93-9cfc-4fc1-ab33-4fc1eb0ad0ee",
        name: "acacia scent",
        price: "83$",
        image: "image_123",
        categoryName: "FLORAL_WATER",
        productTypeName: "EAU_DE_TOILETE",
      },
    ],
    skipDuplicates: true,
  });
  //ProductTypes
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productTypes = await prisma.productTypes.createMany({
    data: [
      { name: "SCRUBS_AND_MASKS" },
      { name: "NATURAL_DEODORANTS" },
      { name: "HAIR_OILD_AND_SERUMS" },
      { name: "SOLID_SHAMPOOS_AND_HAIR_SOAPS" },
      { name: "EAU_DE_TOILETE" },
    ],
    skipDuplicates: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tags = await prisma.tags.createMany({
    data: [
      { name: "VEGAN_COSMETICS" },
      { name: "ORGANIC_COSMETICS" },
      { name: "HANDMADE_COSMETICS" },
      { name: "SUMMER_ESSENTIALS" },
      { name: "GIFTS" },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
