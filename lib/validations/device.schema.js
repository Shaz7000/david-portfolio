import { z } from "zod";

export const deviceQuerySchema = z.object({
  id: z.string().min(1, "id is required"),
});

export const detectSchema = z.object({
  image: z.string().min(1),
});
