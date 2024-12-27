import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findFirstProduct(): Promise<{ id: string } | null> {
  return await prisma.products.findFirst({
    select: { id: true },
    orderBy: { id: "asc" }, // change to timestamp
  });
}

const readProducts = async (
  isForward = true,
  pageSize = 6,
  skip = [0, 0], // [forwardSkip, backwardSkip]
  cursor?: string
) => {
  const pageSizeWithDirection = isForward ? pageSize : -pageSize;
  const skipForDirection = isForward ? skip[0] : skip[1];
  if (!cursor) {
    cursor = (await findFirstProduct())?.id;
  }

  const products = await prisma.products.findMany({
    take: pageSizeWithDirection,
    skip: skipForDirection,
    cursor: {
      id: cursor,
    },
    orderBy: {
      id: "asc",
    },
  });

  const productsLength = products?.length;
  if (productsLength) {
    cursor = products?.[productsLength - 1]?.id;
    skip = [1, productsLength];
  }

  return { products, cursor, skip };
};

const readProduct = async (id: string) => {
  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    throw new Error("Product does not exist!");
  }

  return product;
};

const readProductsBatch = async (ids: Array<string>) => {
  const getProducts = await prisma.products.findMany({
    where: {
      id: { in: ids },
    },
  });

  return getProducts;
};

export default { readProducts, readProduct, readProductsBatch };
