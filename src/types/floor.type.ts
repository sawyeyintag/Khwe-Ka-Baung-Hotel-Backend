import { z } from "zod";
import { Request } from "express";
import { FloorCreateSchema } from "../schema/floor.zod";

type FloorCreate = z.infer<typeof FloorCreateSchema>;

export interface FloorCreateRequest extends Request {
  body: FloorCreate;
}
