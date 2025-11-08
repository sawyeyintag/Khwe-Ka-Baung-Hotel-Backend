import prismaClient from "@/config/prismaClient";
import { BadRequestsException } from "@/exceptions/bad-requests";
import { SessionCreate } from "@/types/session.type";

export class SessionService {
  static async createSession(newSession: SessionCreate) {
    const {
      roomNumber,
      guestIds,
      numberOfExtraBeds,
      checkInAt,
      checkOutAt,
      roomPrice,
      extraBedPrice,
      isActive,
      note,
      isBreakfastIncluded,
    } = newSession;
    return await prismaClient.session.create({
      data: {
        roomNumber,
        numberOfExtraBeds,
        checkInAt: new Date(checkInAt),
        checkOutAt: new Date(checkOutAt),
        roomPrice,
        extraBedPrice,
        isActive,
        note,
        isBreakfastIncluded,
        guests: {
          connect: guestIds.map((uid) => ({ uid })),
        },
      },
      include: {
        guests: true,
      },
    });
  }

  static async getAllSessions() {
    return await prismaClient.session.findMany({
      include: {
        guests: true,
      },
    });
  }

  static async getSessionById(id: number) {
    return await prismaClient.session.findUnique({
      where: { id },
      include: {
        guests: true,
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
        isActive: true,
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
