import { Prisma } from "@prisma/client";
export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMapper = (e: Error): string => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return JSON.stringify(e?.meta?.message);
  }
  // if (e instanceof Prisma.PrismaClientUnknownRequestError) {
  //   return "Unknown error occured";
  // }
  return e?.message || "Error occured";
};
