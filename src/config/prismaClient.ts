import { PrismaClient } from "../generated/client";

const prismaClient = new PrismaClient({
  log: ["query"],
});
export default prismaClient;
