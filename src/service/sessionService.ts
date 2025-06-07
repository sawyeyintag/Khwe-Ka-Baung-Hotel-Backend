import prismaClient from "../config/prismaClient";
import { SessionCreate } from "../types/session.type";

class SessionService {
  async createSession(newSession: SessionCreate) {
    const { roomNumber, guestIds, numberOfExtraBeds, actualCheckIn } =
      newSession;
    return await prismaClient.session.create({
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
  }

  async getAllSessions() {
    return await prismaClient.session.findMany({
      include: {
        guests: true,
      },
    });
  }

  async getSessionById(id: number) {
    return await prismaClient.session.findUnique({
      where: { id },
      include: {
        guests: true,
      },
    });
  }

  async deleteSession(id: number) {
    return await prismaClient.session.delete({
      where: { id },
    });
  }

  async endSession(id: number, actualCheckOut: Date) {
    return await prismaClient.session.update({
      where: { id },
      data: { actualCheckOut, isActive: false },
    });
  }
}

export default new SessionService();
