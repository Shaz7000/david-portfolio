import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const createSessionSchema = z.object({
  deviceId: z.string().min(1),
});
