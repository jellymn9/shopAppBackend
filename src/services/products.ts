import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function () {
  const userId = (
    await prisma.products.findFirst({
      select: { id: true },
      orderBy: { id: "asc" },
    })
  )?.id;
  pageBookmark = userId;
})();

let pageBookmark: string | undefined;
let skip: [number, number] = [0, 0]; // [forwardSkip, backwardSkip]

const readProducts = async (isForward: boolean, pageSize = 2) => {
  const pageSizeWithDirection = isForward ? pageSize : -pageSize;

  const products = await prisma.products.findMany({
    take: pageSizeWithDirection,
    skip: isForward ? skip[0] : skip[1],
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

export default { readProducts };
