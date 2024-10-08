import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let pageBookmark: string | undefined;
let skip: [number, number] = [0, 0]; // [forwardSkip, backwardSkip]

async function findFirstProduct(): Promise<{ id: string } | null> {
  return await prisma.products.findFirst({
    select: { id: true },
    orderBy: { id: "asc" },
  });
}

const readProducts = async (isForward = true, pageSize = 6) => {
  const pageSizeWithDirection = isForward ? pageSize : -pageSize;
  const skipForDirection = isForward ? skip[0] : skip[1];
  if (!pageBookmark) {
    pageBookmark = (await findFirstProduct())?.id;
  }

  const products = await prisma.products.findMany({
    take: pageSizeWithDirection,
    skip: skipForDirection,
    cursor: {
      id: pageBookmark,
    },
    orderBy: {
      id: "asc",
    },
  });

  const productsLength = products?.length;
  if (productsLength) {
    pageBookmark = products?.[productsLength - 1]?.id;
    skip = [1, productsLength];
  }

  return products;
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

export default { readProducts, readProduct };
