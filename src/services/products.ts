import { PrismaClient } from "@prisma/client";
import { CustomError } from "../utils/errorHandlers/errorHandler";

const prisma = new PrismaClient();

let pageBookmark: string | undefined;
let skip: [number, number] = [0, 0]; // [forwardSkip, backwardSkip]

async function findFirstProduct(): Promise<{ id: string } | null> {
  return await prisma.products.findFirst({
    select: { id: true },
    orderBy: { id: "asc" },
  });
}

const readProducts = async (isForward: boolean, pageSize = 2) => {
  const pageSizeWithDirection = isForward ? pageSize : -pageSize;
  const skipForDirection = isForward ? skip[0] : skip[1];
  try {
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
  } catch (e) {
    throw new Error("error occured");
  }
};

const readProduct = async (id: string) => {
  //try {
  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    throw new Error("Product does not exist!");
  }

  return product;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // } catch (e: any) {
  //   throw new Error(e?.message);
  // }
};

export default { readProducts, readProduct };
