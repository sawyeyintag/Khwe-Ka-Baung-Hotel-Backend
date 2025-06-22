import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { GuestUpsertRequest } from "../types/guest.type";
import log from "../utils/logger";

class GuestController {
  async createGuest(req: GuestUpsertRequest, res: Response) {
    const { name, phone, email, address, nicCardNum } = req.body;
    const guest = await prismaClient.guest.findFirst({
      where: { nicCardNum },
    });
    if (guest) {
      throw new BadRequestsException("The guest already exists");
    }
    const createdGuest = await prismaClient.guest.create({
      data: { name, phone, email, address, nicCardNum },
    });
    return res.status(201).json({
      data: createdGuest,
    });
  }

  async getAllGuests(req: Request, res: Response) {
    const guests = await prismaClient.guest.findMany();
    return res.status(200).json({
      data: guests,
    });
  }

  async getGuestByNicCardNum(req: Request, res: Response) {
    const { nicCardNum } = req.params;
    const guest = await prismaClient.guest.findUnique({
      where: { nicCardNum },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    return res.status(200).json({
      data: guest,
    });
  }

  async updateGuest(req: GuestUpsertRequest, res: Response) {
    const { id } = req.params;
    const { name, phone, email, address, nicCardNum } = req.body;
    const guest = await prismaClient.guest.findUnique({
      where: { uid: id },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    const updatedGuest = await prismaClient.guest.update({
      where: { uid: id },
      data: { name, phone, email, address, nicCardNum },
    });
    return res.status(200).json({
      data: updatedGuest,
    });
  }

  async deleteGuest(req: Request, res: Response) {
    const { id } = req.params;
    const guest = await prismaClient.guest.findUnique({
      where: { uid: id },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    await prismaClient.guest.delete({
      where: { uid: id },
    });
    return res.status(204).send();
  }
}

export default new GuestController();
