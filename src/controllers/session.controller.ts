import { Request, Response } from "express";

import { BadRequestsException } from "@/exceptions/bad-requests";
import { Session } from "@/generated/client";
import { GuestService } from "@/services/guest.service";
import { SessionService } from "@/services/session.service";
import { SessionCreateRequest, SessionEndRequest } from "@/types/session.type";

export class SessionController {
  static async create(req: SessionCreateRequest, res: Response) {
    const { guestIds } = req.body;

    // Check if the guest already have a session
    const isGuestInSession = await GuestService.validateInSession(guestIds);
    if (isGuestInSession) {
      throw new BadRequestsException(
        "One or more guests already have an active session"
      );
    }

    const createdSession = await SessionService.create(req.body);

    return res.status(201).json({
      data: createdSession,
    });
  }

  static async updateGuestIds(req: Request, res: Response) {
    const sessionId = parseInt(req.params.id);
    const { guestIds } = req.body;

    // Validate session exists
    const session = await SessionService.getById(sessionId);
    if (!session) {
      throw new BadRequestsException(`Session with ID ${sessionId} not found`);
    }

    // Validate all guests exist
    await GuestService.validateGuestsExist(guestIds);
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
