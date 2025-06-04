import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { SessionCreateRequest } from "../types/session.type";
import { Session } from "../generated/client";

class SessionController {
  async createSession(req: SessionCreateRequest, res: Response) {
    const { roomNumber, guestIds, numberOfExtraBeds, actualCheckIn } = req.body;
    // Check if the guest already have a session
    const existingSession = await prismaClient.session.findFirst({
      where: { isActive: true, guests: { some: { uid: { in: guestIds } } } },
    });
    if (existingSession) {
      throw new BadRequestsException(
        "The guest already have an active session"
      );
    }
    const createdSession = await prismaClient.session.create({
      data: {
        roomNumber,
        numberOfExtraBeds,
        actualCheckIn,
        guests: {
          connect: guestIds.map((uid) => ({ uid })),
        },
      },
      include: {
        guests: true,
      },
    });
    return res.status(201).json({
      data: createdSession,
    });
  }

  async getAllSessions(req: Request, res: Response) {
    const sessions: Session[] = await prismaClient.session.findMany({
      include: {
        guests: true,
      },
    });
    return res.status(200).json({
      data: sessions,
    });
  }
}

export default new SessionController();
