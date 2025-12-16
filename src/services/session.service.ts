import prismaClient from "@/config/prismaClient";
import { BadRequestsException } from "@/exceptions/bad-requests";
import { SessionStatus } from "@/shared/enums/SessionStatus.enum";
import { SessionCreate } from "@/types/session.type";

import { GuestService } from "./guest.service";

export class SessionService {
  static async create(newSession: SessionCreate) {
    const { guestIds, checkInAt, checkOutAt, ...sessionData } = newSession;

    return await prismaClient.session.create({
      data: {
        ...sessionData,
        checkInAt: new Date(checkInAt),
        checkOutAt: new Date(checkOutAt),
        guests: {
          create: guestIds.map((guestUid) => ({
            guest: {
              connect: { uid: guestUid },
            },
          })),
        },
      },
      include: {
        guests: {
          include: {
            guest: true,
          },
        },
      },
    });
  }

  static async updateGuestIds(guestIds: string[], sessionId: number) {
    // Validate session exists
    const session = await this.getById(sessionId);

    if (!session) {
      throw new BadRequestsException(`Session with ID ${sessionId} not found`);
    }

    // Validate all guests exist
    const allGuestsExist = await GuestService.validateGuestsExist(guestIds);
    if (!allGuestsExist) {
      throw new BadRequestsException("One or more guests not found");
    }

    const existingGuests = await prismaClient.guestSession.findMany({
      where: { sessionId },
    });
    const existingGuestIds = existingGuests.map((gs) => gs.guestUid);

    const guestsToAdd = guestIds.filter((id) => !existingGuestIds.includes(id));
    const guestsToRemove = existingGuestIds.filter(
      (id) => !guestIds.includes(id)
    );
    await prismaClient.$transaction([
      prismaClient.guestSession.deleteMany({
        where: {
          sessionId,
          guestUid: { in: guestsToRemove },
        },
      }),
      prismaClient.guestSession.createMany({
        data: guestsToAdd.map((guestUid) => ({ guestUid, sessionId })),
      }),
    ]);
  }

  static async getAllSessions() {
    return await prismaClient.session.findMany({
      include: {
        guests: {
          include: {
            guest: true,
          },
        },
      },
    });
  }

  static async getById(id: number) {
    return await prismaClient.session.findUnique({
      where: { id },
      include: {
        guests: {
          include: {
            guest: true,
          },
        },
      },
    });
  }

  static async deleteSession(id: number) {
    return await prismaClient.session.delete({
      where: { id },
    });
  }

  static async endSession(id: number, checkOutAt: string) {
    return await prismaClient.session.update({
      where: { id },
      data: { checkOutAt: new Date(checkOutAt), isActive: false },
    });
  }

  static async checkOverlappingSession(
    roomNumber: string,
    checkInAt: Date,
    checkOutAt: Date
  ) {
    const overlappingSession = await prismaClient.session.findFirst({
      where: {
        roomNumber,
        sessionStatusId: SessionStatus.ACTIVE,
        checkInAt,
        checkOutAt,
      },
    });
    if (overlappingSession) {
      throw new BadRequestsException(
        `Room ${roomNumber} is currently occupied from ` +
          `${overlappingSession.checkInAt.toISOString()} to ` +
          `${overlappingSession.checkOutAt?.toISOString() || "now"}`
      );
    }
  }
}
