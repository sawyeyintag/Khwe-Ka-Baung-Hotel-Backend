import prismaClient from "../config/prismaClient";
import { Request, Response } from "express";
import { BadRequestsException } from "../exceptions/bad-requests";
import { SessionCreateRequest, SessionEndRequest } from "../types/session.type";
import { Session } from "../generated/client";

import sessionService from "../services/session.service";

class SessionController {
  async createSession(req: SessionCreateRequest, res: Response) {
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
    const createdSession = await sessionService.createSession(req.body);

    return res.status(201).json({
      data: createdSession,
    });
  }

  async getAllSessions(req: Request, res: Response) {
    const sessions: Session[] = await sessionService.getAllSessions();
    return res.status(200).json({
      data: sessions,
    });
  }

  async getSessionById(req: Request, res: Response) {
    const { id } = req.params;
    const session: Session | null = await sessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    return res.status(200).json({
      data: session,
    });
  }

  async endSession(req: SessionEndRequest, res: Response) {
    const { id } = req.params;
    const { actualCheckOut } = req.body;
    const session: Session | null = await sessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    if (!session.isActive) {
      throw new BadRequestsException("Session is already ended");
    }
    const updatedSession = await sessionService.endSession(
      parseInt(id),
      actualCheckOut
    );
    return res.status(200).json({
      data: updatedSession,
    });
  }

  async deleteSession(req: Request, res: Response) {
    const { id } = req.params;
    const session: Session | null = await sessionService.getSessionById(
      parseInt(id)
    );
    if (!session) {
      throw new BadRequestsException("Session not found");
    }
    await sessionService.deleteSession(parseInt(id));
    return res.status(204).send();
  }
}

export default new SessionController();
