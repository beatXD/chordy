import { z } from "zod";

export const songQuerySchema = z.object({
  search: z.string().optional(),
  genre: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(20),
});

export const songCreateSchema = z.object({
  title: z.string().min(1).max(200),
  artist: z.string().min(1).max(200),
  key: z.string().min(1).max(5),
  content: z.string().min(1),
  genre: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type SongQuery = z.infer<typeof songQuerySchema>;
export type SongCreate = z.infer<typeof songCreateSchema>;
