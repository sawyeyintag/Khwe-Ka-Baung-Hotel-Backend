import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { FloorUpsertRequest } from "../types/floor.type";
import floorService from "../services/floor.service";

class FloorController {
  async getAllFloors(req: Request, res: Response) {
    const floors = await floorService.getAllFloors();
    return res.status(200).json({
      data: floors,
    });
  }
}

export default new FloorController();
