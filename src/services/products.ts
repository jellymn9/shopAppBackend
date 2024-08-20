import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let pageBookmark: string;

const readProducts = async (isForward: boolean) => {
  const pageSize = isForward ? 4 : -4;
  const skip = pageBookmark ? 1 : 0;
  const products = await prisma.products.findMany({
    take: pageSize,
    skip: skip,
    cursor: {
      id: pageBookmark,
    },
    orderBy: {
      id: "asc",
    },
  });
  pageBookmark = products?.[pageSize - 1].id;

  return products;
};

export default { readProducts };
