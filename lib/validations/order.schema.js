import { z } from "zod";

export const createOrderSchema = z.object({
  deviceId: z.string().min(1),
  moduleId: z.string().min(1),
});
