import { z } from "zod";
import { Request } from "express";
import { SessionCreateSchema } from "../schema/session.zod";
import { Guest } from "../generated/client";

type SessionCreate = z.infer<typeof SessionCreateSchema>;

export interface SessionCreateRequest extends Request {
  body: SessionCreate;
}
