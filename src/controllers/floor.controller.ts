import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { FloorCreateRequest } from "../types/floor.type";

class FloorController {
  async createFloor(req: FloorCreateRequest, res: Response) {
    const { floorNumber } = req.body;
    const room = await prismaClient.floor.findFirst();
    if (room) {
      throw new BadRequestsException("The floor already exists");
    }
    const createdFloor = await prismaClient.floor.create({
      data: { floorNumber },
    });
    return res.status(201).json({
      data: createdFloor,
    });
  }

  async getAllFloors(req: Request, res: Response) {
    const floors = await prismaClient.floor.findMany({
      include: {
        rooms: true,
      },
    });
    if (!floors.length) {
      throw new NotFoundException("No floors found");
    }
    return res.status(200).json({
      data: floors,
    });
  }
}

export default new FloorController();
