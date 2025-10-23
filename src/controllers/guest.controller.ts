import { Request, Response } from "express";

import prismaClient from "../config/prismaClient";
import { BadRequestsException } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { GuestUpsertRequest } from "../types/guest.type";
import log from "../utils/logger";

export class GuestController {
  async createGuest(req: GuestUpsertRequest, res: Response) {
    const { name, phone, email, address, nicCardNumber } = req.body;
    const guest = await prismaClient.guest.findFirst({
      where: { nicCardNumber },
    });
    if (guest) {
      throw new BadRequestsException("The guest already exists");
    }
    const createdGuest = await prismaClient.guest.create({
      data: { name, phone, email, address, nicCardNumber },
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

  async getGuestById(req: Request, res: Response) {
    const { id } = req.params;
    const guest = await prismaClient.guest.findUnique({
      where: { uid: id },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    return res.status(200).json({
      data: guest,
    });
  }

  async getGuestByNicCardNum(req: Request, res: Response) {
    const { nicCardNumber } = req.params;
    const guest = await prismaClient.guest.findUnique({
      where: { nicCardNumber },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    return res.status(200).json({
      data: guest,
    });
  }

  async searchGuests(req: Request, res: Response) {
    const { q, limit = 10 } = req.query;

    if (!q || typeof q !== "string" || q.trim().length === 0) {
      return res.status(400).json({
        error: "Search query parameter 'q' is required and cannot be empty",
      });
    }

    const searchQuery = q.trim();
    const resultLimit = Math.min(parseInt(limit as string) || 10, 20);

    // Single query with smart ordering for relevance
    const guests = await prismaClient.guest.findMany({
      where: {
        OR: [
          { name: { contains: searchQuery } },
          { phone: { contains: searchQuery } },
          { nicCardNumber: { contains: searchQuery } },
        ],
      },
      take: resultLimit * 2, // Get more results to sort properly
      select: {
        uid: true,
        name: true,
        phone: true,
        email: true,
        nicCardNumber: true,
      },
    });

    // Filter and sort in JavaScript for case-insensitive matching and relevance
    const searchLower = searchQuery.toLowerCase();

    const filteredGuests = guests.filter((guest) => {
      const nameLower = guest.name.toLowerCase();
      const phoneLower = guest.phone.toLowerCase();
      const nicLower = guest.nicCardNumber?.toLowerCase() || "";

      return (
        nameLower.includes(searchLower) ||
        phoneLower.includes(searchLower) ||
        nicLower.includes(searchLower)
      );
    });

    // Sort for relevance (exact matches first)
    const sortedGuests = filteredGuests.sort((a, b) => {
      const aExactName = a.name.toLowerCase() === searchLower;
      const bExactName = b.name.toLowerCase() === searchLower;
      const aExactPhone = a.phone.toLowerCase() === searchLower;
      const bExactPhone = b.phone.toLowerCase() === searchLower;
      const aExactNic = a.nicCardNumber?.toLowerCase() === searchLower;
      const bExactNic = b.nicCardNumber?.toLowerCase() === searchLower;

      // Exact matches first
      const aExact = aExactName || aExactPhone || aExactNic;
      const bExact = bExactName || bExactPhone || bExactNic;

      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;

      // Then alphabetical by name
      return a.name.localeCompare(b.name);
    });

    // Return only the requested limit
    const finalResults = sortedGuests.slice(0, resultLimit);

    return res.status(200).json({
      data: finalResults,
    });
  }

  async updateGuest(req: GuestUpsertRequest, res: Response) {
    const { id } = req.params;
    const { name, phone, email, address, nicCardNumber } = req.body;
    const guest = await prismaClient.guest.findUnique({
      where: { uid: id },
    });
    if (!guest) {
      throw new NotFoundException("Guest not found");
    }
    const updatedGuest = await prismaClient.guest.update({
      where: { uid: id },
      data: { name, phone, email, address, nicCardNumber },
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
