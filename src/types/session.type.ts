import { z } from "zod";
import { Request } from "express";
import { SessionCreateSchema, SessionEndSchema } from "../schema/session.zod";

export type SessionCreate = z.infer<typeof SessionCreateSchema>;

export type SessionEnd = z.infer<typeof SessionEndSchema>;

export interface SessionCreateRequest extends Request {
  body: SessionCreate;
}

export interface SessionEndRequest extends Request {
  body: SessionEnd;
}
