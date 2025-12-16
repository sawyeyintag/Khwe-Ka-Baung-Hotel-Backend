import prismaClient from "@/config/prismaClient";
import { SessionStatus } from "@/shared/enums/SessionStatus.enum";

export class RoomService {
  static async validateOccupied(
    roomNumber: string[],
    checkInAt: Date,
    checkOutAt: Date
  ) {
    const rooms = await prismaClient.room.findMany({
      where: {
        roomNumber: { in: roomNumber },
        sessions: {
          some: {
            sessionStatusId: SessionStatus.ACTIVE || SessionStatus.PENDING,
            checkInAt,
            checkOutAt,
          },
        },
      },
    });
    return rooms.length > 0;
  }
}
