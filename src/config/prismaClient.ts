import { PrismaClient } from "@prisma/client";
import { RegisterSchema } from "../schema/admin";

const prismaClient = new PrismaClient({
  log: ["query"],
});
export default prismaClient;
