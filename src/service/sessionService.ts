import { Prisma } from "@prisma/client";
import prismaClient from "../config/prismaClient";

// Types
interface PaginationParams {
  page: number;
  limit: number;
}

interface SessionFilters {
  roomNumber?: number;
  guestId?: string;
  actualCheckIn?: Date;
  actualCheckOut?: Date;
  isActive?: boolean;
}

interface GetSessionsQuery extends PaginationParams, SessionFilters {}

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface GetSessionsResult {
  sessions: any[]; // Replace with your actual Session type
  totalCount: number;
  pagination: PaginationMeta;
}

// Utils
class FilterBuilder {
  private static buildSessionWhereClause(filters: SessionFilters) {
    const whereClause: any = {};

    if (filters.roomNumber !== undefined) {
      whereClause.roomNumber = filters.roomNumber;
    }

    if (filters.guestId) {
      whereClause.guests = {
        some: {
          uid: filters.guestId,
        },
      };
    }

    if (filters.actualCheckIn !== undefined) {
      whereClause.actualCheckIn = filters.actualCheckIn;
    }

    if (filters.actualCheckOut !== undefined) {
      whereClause.actualCheckOut = filters.actualCheckOut;
    }

    if (filters.isActive !== undefined) {
      whereClause.isActive = filters.isActive;
    }

    return whereClause;
  }

  static forSessions(filters: SessionFilters) {
    return this.buildSessionWhereClause(filters);
  }
}

class PaginationHelper {
  static calculateSkip(page: number, limit: number): number {
    return (page - 1) * limit;
  }

  static buildMeta(
    page: number,
    limit: number,
    totalCount: number
  ): PaginationMeta {
    const totalPages = Math.ceil(totalCount / limit);

    return {
      page,
      limit,
      total: totalCount,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    };
  }
}

// Validation
class QueryValidator {
  static validatePagination(params: PaginationParams): void {
    if (params.page < 1) {
      throw new Error("Page must be greater than 0");
    }
    if (params.limit < 1 || params.limit > 100) {
      throw new Error("Limit must be between 1 and 100");
    }
  }

  static validateGetSessionsQuery(query: GetSessionsQuery): void {
    this.validatePagination(query);

    if (
      query.actualCheckIn &&
      query.actualCheckOut &&
      query.actualCheckIn > query.actualCheckOut
    ) {
      throw new Error("Check-in date must be before check-out date");
    }
  }
}

// Main Service
export class SessionService {
  private static readonly DEFAULT_INCLUDE = {
    guests: true,
  } as const;

  private static readonly DEFAULT_ORDER_BY = {
    createdAt: "desc" as const,
  };

  static async getSessions(
    query: GetSessionsQuery
  ): Promise<GetSessionsResult> {
    // Validate input
    QueryValidator.validateGetSessionsQuery(query);

    // Build query components
    const whereClause = FilterBuilder.forSessions(query);
    const skip = PaginationHelper.calculateSkip(query.page, query.limit);

    // Execute queries in parallel
    const [sessions, totalCount] = await Promise.all([
      prismaClient.session.findMany({
        where: whereClause,
        include: this.DEFAULT_INCLUDE,
        skip,
        take: query.limit,
        orderBy: this.DEFAULT_ORDER_BY,
      }),
      prismaClient.session.count({
        where: whereClause,
      }),
    ]);

    // Build response
    return {
      sessions,
      totalCount,
      pagination: PaginationHelper.buildMeta(
        query.page,
        query.limit,
        totalCount
      ),
    };
  }

  // Optional: Add method for getting sessions without pagination
  static async getAllSessions(filters: SessionFilters = {}) {
    const whereClause = FilterBuilder.forSessions(filters);

    return prismaClient.session.findMany({
      where: whereClause,
      include: this.DEFAULT_INCLUDE,
      orderBy: this.DEFAULT_ORDER_BY,
    });
  }

  // Optional: Add method for getting single session
  static async getSessionById(id: number) {
    return prismaClient.session.findUnique({
      where: { id },
      include: this.DEFAULT_INCLUDE,
    });
  }
}
