import { NextFunction, Response } from "express";
import prismaClient from "../config/prismaClient";
import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { RegisterAdminRequest, LoginAdminRequest } from "../types/auth.type";

class AuthController {
  async registerAdmin(
    req: RegisterAdminRequest,
    res: Response,
    next: NextFunction
  ) {
    const { username, password } = req.body;
    const admin = await prismaClient.admin.findFirst({
      where: { username },
    });
    if (admin) {
      throw new BadRequestsException("The account already exists");
    }
    await prismaClient.admin.create({
      data: {
        username: username,
        password: await hash(password, 10),
      },
    });
    res.status(204).end();
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
