import { PrismaClient } from "../generated/client";

const prismaClient = new PrismaClient({
  log: [],
});
export default prismaClient;
