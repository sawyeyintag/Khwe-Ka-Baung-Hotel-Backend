import { z } from "zod";
import { Request } from "express";
import { FloorCreateSchema } from "../schema/floor.zod";

type FloorCreate = z.infer<typeof FloorCreateSchema>;

export interface FloorUpsertRequest extends Request {
  body: FloorCreate;
}
