import { Prisma, PrismaClient } from "@prisma/client";
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
  //products
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const lavanderOil = await prisma.products.upsert({
  //   where: { id: "9ecacacc-9cef-4ef0-ab5d-d8f0ba0338a5" },
  //   update: {},
  //   create: {
  //     id: "9ecacacc-9cef-4ef0-ab5d-d8f0ba0338a5",
  //     name: "Lavander oil",
  //     price: "234$",
  //     image: "some_image",
  //     category: {
  //       create: {
  //         name: "OIL",
  //       },
  //     },
  //   },
  // });

  //products

  const products = [
    //put in use later..
    {
      id: "011fda23-ea15-4543-9a13-6b932c8c0676",
      name: "lavander hair shampoo",
      //price: "45$",
      image: "image_123",
      categoryName: "SOAP",
      productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
      price: 45,
      currency: "EUR",
    },
    {
      id: "ae825c6e-daa8-4568-9117-b9473fa01f7d",
      name: "Pear body scrub",
      //price: "45$",
      image: "image_123",
      categoryName: "SOAP",
      productTypeName: "SCRUBS_AND_MASKS",
      price: 45,
      currency: "EUR",
    },
    {
      id: "08118746-82a3-43bc-9339-d13a1599dae7",
      name: "Pear hair mask",
      //price: "45$",
      image: "image_123",
      categoryName: "SOAP",
      productTypeName: "SCRUBS_AND_MASKS",
      price: 45,
      currency: "EUR",
    },
    {
      id: "ce88cfed-0343-4206-8d64-68b43059e209",
      name: "Pine deodorant",
      //price: "45$",
      image: "image_123",
      categoryName: "SOAP",
      productTypeName: "NATURAL_DEODORANTS",
      price: 45,
      currency: "EUR",
    },
    {
      id: "36ae2d93-9cfc-4fc1-ab33-4fc1eb0ad0ee",
      name: "acacia scent",
      //price: "83$",
      image: "image_123",
      categoryName: "FLORAL_WATER",
      productTypeName: "EAU_DE_TOILETE",
      price: 83,
      currency: "EUR",
    },
    {
      id: "0a5b82ed-0eba-4317-9b02-e685c2850887",
      name: "Lavender Bliss Oil",
      //price: "234$",
      image: "some_image",
      categoryName: "OIL",
      productTypeName: "HAIR_OILD_AND_SERUMS",
      price: 234,
      currency: "EUR",
    },
    {
      id: "693d7f2d-1e9c-4dca-befc-098fbb0c6ec9",
      name: "Rose Petal Glow Cream",
      //price: "200$",
      image: "some_image",
      categoryName: "CREAM",
      productTypeName: "SCRUBS_AND_MASKS",
      price: 200,
      currency: "EUR",
    },
    {
      id: "f8668301-8473-4184-a734-e6eb96545071",
      name: "Peppermint Fresh Floral Water",
      //price: "150$",
      image: "some_image",
      categoryName: "FLORAL_WATER",
      productTypeName: "EAU_DE_TOILETE",
      price: 150,
      currency: "EUR",
    },
    {
      id: "3f29e67b-0195-4297-a5a3-8a991d53df38",
      name: "Lemon Zest Cleansing Soap",
      //price: "120$",
      image: "some_image",
      categoryName: "SOAP",
      productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
      price: 120,
      currency: "EUR",
    },
    {
      id: "a1bbb0b8-0bda-4ca4-923a-5b016f4e0268",
      name: "Eucalyptus Vitality Oil",
      //price: "180$",
      image: "some_image",
      categoryName: "OIL",
      productTypeName: "HAIR_OILD_AND_SERUMS",
      price: 180,
      currency: "EUR",
    },
    {
      id: "10e4086c-fcab-4112-a6b4-dd5d61cc47ec",
      name: "Orange Radiance Cream",
      //price: "130$",
      image: "some_image",
      categoryName: "CREAM",
      productTypeName: "SCRUBS_AND_MASKS",
      price: 130,
      currency: "EUR",
    },
    {
      id: "65504f26-7f38-4f7b-a889-8d00b4f3c55f",
      name: "Tea Tree Revitalizing Soap",
      //price: "140$",
      image: "some_image",
      categoryName: "SOAP",
      productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
      price: 140,
      currency: "EUR",
    },
    {
      id: "d07ecf1a-20f3-49db-a1ad-a61023c49379",
      name: "Chamomile Calm Floral Water",
      //price: "190$",
      image: "some_image",
      categoryName: "FLORAL_WATER",
      productTypeName: "EAU_DE_TOILETE",
      price: 190,
      currency: "EUR",
    },
    {
      id: "7b275400-4835-477e-a6b6-d333411bfa4e",
      name: "Ylang Ylang Dream Oil",
      //price: "240$",
      image: "some_image",
      categoryName: "OIL",
      productTypeName: "EAU_DE_TOILETE",
      price: 240,
      currency: "EUR",
    },
    {
      id: "c0d5ef10-7722-4c73-a364-6db3cc3c59a6",
      name: "Wintergreen Harmony Soap",
      //price: "225$",
      image: "some_image",
      categoryName: "SOAP",
      productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
      price: 225,
      currency: "EUR",
    },
  ];

  const manyProducts = await prisma.products.createMany({
    data: [
      {
        id: "011fda23-ea15-4543-9a13-6b932c8c0676",
        name: "lavander hair shampoo",
        //price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
        price: 45,
        currency: "EUR",
      },
      {
        id: "ae825c6e-daa8-4568-9117-b9473fa01f7d",
        name: "Pear body scrub",
        //price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SCRUBS_AND_MASKS",
        price: 45,
        currency: "EUR",
      },
      {
        id: "08118746-82a3-43bc-9339-d13a1599dae7",
        name: "Pear hair mask",
        //price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "SCRUBS_AND_MASKS",
        price: 45,
        currency: "EUR",
      },
      {
        id: "ce88cfed-0343-4206-8d64-68b43059e209",
        name: "Pine deodorant",
        //price: "45$",
        image: "image_123",
        categoryName: "SOAP",
        productTypeName: "NATURAL_DEODORANTS",
        price: 45,
        currency: "EUR",
      },
      {
        id: "36ae2d93-9cfc-4fc1-ab33-4fc1eb0ad0ee",
        name: "acacia scent",
        //price: "83$",
        image: "image_123",
        categoryName: "FLORAL_WATER",
        productTypeName: "EAU_DE_TOILETE",
        price: 83,
        currency: "EUR",
      },
      {
        id: "0a5b82ed-0eba-4317-9b02-e685c2850887",
        name: "Lavender Bliss Oil",
        //price: "234$",
        image: "some_image",
        categoryName: "OIL",
        productTypeName: "HAIR_OILD_AND_SERUMS",
        price: 234,
        currency: "EUR",
      },

      {
        id: "693d7f2d-1e9c-4dca-befc-098fbb0c6ec9",
        name: "Rose Petal Glow Cream",
        //price: "200$",
        image: "some_image",
        categoryName: "CREAM",
        productTypeName: "SCRUBS_AND_MASKS",
        price: 200,
        currency: "EUR",
      },
      {
        id: "f8668301-8473-4184-a734-e6eb96545071",
        name: "Peppermint Fresh Floral Water",
        //price: "150$",
        image: "some_image",
        categoryName: "FLORAL_WATER",
        productTypeName: "EAU_DE_TOILETE",
        price: 150,
        currency: "EUR",
      },
      {
        id: "3f29e67b-0195-4297-a5a3-8a991d53df38",
        name: "Lemon Zest Cleansing Soap",
        //price: "120$",
        image: "some_image",
        categoryName: "SOAP",
        productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
        price: 120,
        currency: "EUR",
      },
      {
        id: "a1bbb0b8-0bda-4ca4-923a-5b016f4e0268",
        name: "Eucalyptus Vitality Oil",
        //price: "180$",
        image: "some_image",
        categoryName: "OIL",
        productTypeName: "HAIR_OILD_AND_SERUMS",
        price: 180,
        currency: "EUR",
      },
      {
        id: "10e4086c-fcab-4112-a6b4-dd5d61cc47ec",
        name: "Orange Radiance Cream",
        //price: "130$",
        image: "some_image",
        categoryName: "CREAM",
        productTypeName: "SCRUBS_AND_MASKS",
        price: 130,
        currency: "EUR",
      },
      {
        id: "65504f26-7f38-4f7b-a889-8d00b4f3c55f",
        name: "Tea Tree Revitalizing Soap",
        //price: "140$",
        image: "some_image",
        categoryName: "SOAP",
        productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
        price: 140,
        currency: "EUR",
      },
      {
        id: "d07ecf1a-20f3-49db-a1ad-a61023c49379",
        name: "Chamomile Calm Floral Water",
        //price: "190$",
        image: "some_image",
        categoryName: "FLORAL_WATER",
        productTypeName: "EAU_DE_TOILETE",
        price: 190,
        currency: "EUR",
      },
      {
        id: "7b275400-4835-477e-a6b6-d333411bfa4e",
        name: "Ylang Ylang Dream Oil",
        //price: "240$",
        image: "some_image",
        categoryName: "OIL",
        productTypeName: "EAU_DE_TOILETE",
        price: 240,
        currency: "EUR",
      },
      {
        id: "c0d5ef10-7722-4c73-a364-6db3cc3c59a6",
        name: "Wintergreen Harmony Soap",
        //price: "225$",
        image: "some_image",
        categoryName: "SOAP",
        productTypeName: "SOLID_SHAMPOOS_AND_HAIR_SOAPS",
        price: 225,
        currency: "EUR",
      },
    ],
    skipDuplicates: true,
  });

  // const products = await prisma.products.findMany();

  // for (const product of products) {
  //   //   // Remove dollar sign and convert to number
  //   //   const numericPrice = parseInt(product.price.replace("$", ""), 10);

  //   //   // Update the new priceInt column
  //   await prisma.products.update({
  //     where: { id: product.id },
  //     data: { price: product.price },
  //   });
  // }

  // console.log("Price data cleaned and migrated to priceInt column.");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tagsOnProducts = await prisma.tagsOnProducts.createMany({
    data: [
      {
        tagId: "VEGAN_COSMETICS",
        productId: "ce88cfed-0343-4206-8d64-68b43059e209",
      },
      {
        tagId: "ORGANIC_COSMETICS",
        productId: "ce88cfed-0343-4206-8d64-68b43059e209",
      },
      {
        tagId: "ORGANIC_COSMETICS",
        productId: "011fda23-ea15-4543-9a13-6b932c8c0676",
      },
      {
        tagId: "HANDMADE_COSMETICS",
        productId: "011fda23-ea15-4543-9a13-6b932c8c0676",
      },
      {
        tagId: "SUMMER_ESSENTIALS",
        productId: "011fda23-ea15-4543-9a13-6b932c8c0676",
      },
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
