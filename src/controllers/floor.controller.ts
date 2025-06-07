import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { FloorUpsertRequest } from "../types/floor.type";
import floorService from "../service/floor.service";

class FloorController {
  async createFloor(req: FloorUpsertRequest, res: Response) {
    const { floorNumber } = req.body;
    const floor = await prismaClient.floor.findFirst({
      where: { floorNumber },
    });
    if (floor) {
      throw new BadRequestsException("The floor already exists");
    }
    const createdFloor = await floorService.createFloor(req.body);
    return res.status(201).json({
      data: createdFloor,
    });
  }

  async getAllFloors(req: Request, res: Response) {
    const floors = await floorService.getAllFloors();
    return res.status(200).json({
      data: floors,
    });
  }

  async deleteFloor(req: Request, res: Response) {
    const { floorNumber } = req.params;
    const floor = await prismaClient.floor.findUnique({
      where: { floorNumber: parseInt(floorNumber) },
    });
    if (!floor) {
      throw new NotFoundException("Floor not found");
    }
    await floorService.deleteFloor(parseInt(floorNumber));
    return res.status(204).send();
  }
}

export default new FloorController();
