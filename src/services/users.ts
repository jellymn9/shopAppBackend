import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const createUser = async (
  username: string,
  password: string,
  email: string
) => {
  const newEntry = await prisma.users.create({
    data: {
      id: uuidv4(),
      username,
      password,
      email,
    },
  });
  return newEntry;
};

const getUser = async (username: string) => {
  const user = await prisma.users.findUnique({
    where: { username: username },
  });
  if (!user) {
    throw new Error("User does not exist!");
  }
  return user;
};

export default { getUser, createUser };
