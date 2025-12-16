import prismaClient from "@/config/prismaClient";
import { SessionStatus } from "@/shared/enums/SessionStatus.enum";

export class GuestService {
  static async validateExist(guestIds: string[]) {
    const validGuests = await prismaClient.guest.findMany({
      where: { uid: { in: guestIds } },
      select: { uid: true },
    });
    return validGuests.length === guestIds.length;
  }

  static async validateInSession(guestIds: string[]) {
    const guestsWithActiveSession = await prismaClient.guest.findMany({
      where: {
        uid: { in: guestIds },
        sessions: {
          some: {
            session: {
              sessionStatusId: SessionStatus.ACTIVE,
            },
          },
        },
      },
    });
    return guestsWithActiveSession.length > 0;
  }
}
