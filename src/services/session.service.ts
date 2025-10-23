import { BadRequestsException } from "@/exceptions/bad-requests";
import prismaClient from "../config/prismaClient";
import { SessionCreate } from "../types/session.type";

export class SessionService {
  static async createSession(newSession: SessionCreate) {
    const {
      roomNumber,
      guestIds,
      numberOfExtraBeds,
      checkedInAt,
      checkedOutAt,
      extraBedPrice,
      isActive,
      discount,
      note,
      isBreakfastIncluded,
    } = newSession;
    return await prismaClient.session.create({
      data: {
        roomNumber,
        numberOfExtraBeds,
        checkedInAt: new Date(checkedInAt),
        checkedOutAt: new Date(checkedOutAt),
        extraBedPrice,
        isActive,
        discount,
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

  static async endSession(id: number, checkedOutAt: string) {
    return await prismaClient.session.update({
      where: { id },
      data: { checkedOutAt: new Date(checkedOutAt), isActive: false },
    });
  }

  static async checkOverlappingSession(
    roomNumber: string,
    checkedInAt: Date,
    checkedOutAt: Date
  ) {
    const overlappingSession = await prismaClient.session.findFirst({
      where: {
        roomNumber,
        isActive: true,
        checkedInAt,
        checkedOutAt,
      },
    });
    if (overlappingSession) {
      throw new BadRequestsException(
        `Room ${roomNumber} is currently occupied from ` +
          `${overlappingSession.checkedInAt.toISOString()} to ` +
          `${overlappingSession.checkedOutAt?.toISOString() || "now"}`
      );
    }
  }
}
