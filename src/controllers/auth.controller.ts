import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prismaClient";
import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { BadRequestsException } from "../exceptions/bad-requests";
import { AdminCredentialsSchema } from "../schema/auth.zod";
import { NotFoundException } from "../exceptions/not-found";
import { RegisterAdminRequest, LoginAdminRequest } from "../types/auth.types";

class AuthController {
  async registerAdmin(
    req: RegisterAdminRequest,
    res: Response,
    next: NextFunction
  ) {
    AdminCredentialsSchema.parse(req.body);
    const { username, password } = req.body;
    let admin = await prismaClient.admin.findFirst({
      where: { username },
    });
    if (admin) {
      throw new BadRequestsException("The account already exists");
    }
    admin = await prismaClient.admin.create({
      data: {
        username: username,
        password: await hash(password, 10),
      },
    });
    res.json(admin);
  }

  async loginAdmin(req: LoginAdminRequest, res: Response) {
    const { username, password } = req.body;
    const admin = await prismaClient.admin.findFirst({
      where: { username: username },
    });
    if (!admin) {
      throw new NotFoundException("User not found");
    }
    const isPasswordValid = await compare(password, admin.password);
    if (!isPasswordValid) {
      throw new BadRequestsException("Invalid password");
    }
    const token = jwt.sign({ id: admin.id }, JWT_SECRET);
    res.json({ admin, token });
  }
}

export default new AuthController();
