import { NextFunction, Request, Response } from "express";
import prismaClient from "../config/prismaClient";
import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { BadRequestsException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validation";
import { RegisterSchema } from "../schema/admin";

class AuthController {
  login(req: Request, res: Response) {
    res.send("Login Page");
  }

  async registerAdmin(req: Request, res: Response, next: NextFunction) {
    RegisterSchema.parse(req.body);
    const { username, password } = req.body;
    let admin = await prismaClient.admin.findFirst({
      where: { username },
    });
    if (admin) {
      next(
        new BadRequestsException(
          "The account already exists",
          ErrorCode.ACCOUNT_ALREADY_EXISTS
        )
      );
    }
    admin = await prismaClient.admin.create({
      data: {
        username: username,
        password: await hash(password, 10),
      },
    });
    res.json(admin);
  }

  async loginAdmin(req: Request, res: Response) {
    const { username, password } = req.body;
    const admin = await prismaClient.admin.findFirst({
      where: { username: username },
    });
    if (!admin) {
      throw Error("User not found");
    }
    const isPasswordValid = await compare(password, admin.password);
    if (!isPasswordValid) {
      throw Error("Invalid password");
    }
    const token = jwt.sign({ id: admin.id }, JWT_SECRET);
    res.json({ admin, token });
  }
}

export default new AuthController();
