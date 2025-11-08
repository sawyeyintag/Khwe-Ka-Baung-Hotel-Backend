import { Request, Response } from "express";

import prismaClient from "@/config/prismaClient";
import { BadRequestsException } from "@/exceptions/bad-requests";
import { Session } from "@/generated/client";
import { SessionService } from "@/services/session.service";
import { SessionCreateRequest, SessionEndRequest } from "@/types/session.type";

export class SessionController {
  static async createSession(req: SessionCreateRequest, res: Response) {
    const { guestIds } = req.body;
    // Check if the guest already have a session
    const existingSession = await prismaClient.session.findFirst({
      where: { isActive: true, guests: { some: { uid: { in: guestIds } } } },
    });
    if (existingSession) {
      throw new BadRequestsException(
        "The guest already have an active session"
      );
    }
    const createdSession = await SessionService.createSession(req.body);

    return res.status(201).json({
      data: createdSession,
    });
  }

  static async getAllSessions(req: Request, res: Response) {
    const sessions: Session[] = await SessionService.getAllSessions();
    return res.status(200).json({
      data: sessions,
    });
  }

  static async getSessionById(req: Request, res: Response) {
    const { id } = req.params;
    const session: Session | null = await SessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    return res.status(200).json({
      data: session,
    });
  }

  static async endSession(req: SessionEndRequest, res: Response) {
    const { id } = req.params;
    const { actualCheckOut } = req.body;
    const session: Session | null = await SessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    if (!session.isActive) {
      throw new BadRequestsException("Session is already ended");
    }
    const updatedSession = await SessionService.endSession(
      parseInt(id),
      actualCheckOut
    );
    return res.status(200).json({
      data: updatedSession,
    });
  }

  static async deleteSession(req: Request, res: Response) {
    const { id } = req.params;
    const session: Session | null = await SessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    await SessionService.deleteSession(parseInt(id));
    return res.status(204).send();
  }
}

export default new SessionController();
