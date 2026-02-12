import { z } from "zod";
import { NOTES, CHORD_TYPES } from "@/lib/constants";

const noteValues = NOTES.map((n) => n) as [string, ...string[]];
const typeValues = CHORD_TYPES.map((t) => t.value) as [string, ...string[]];

export const chordQuerySchema = z.object({
  root: z.enum(noteValues).optional(),
  type: z.enum(typeValues).optional(),
  search: z.string().optional(),
});

export type ChordQuery = z.infer<typeof chordQuerySchema>;
