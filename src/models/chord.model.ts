import { Schema, model, models } from "mongoose";
import type { IChordPosition, IChord } from "@/types";

const chordPositionSchema = new Schema<IChordPosition>(
  {
    frets: { type: [Schema.Types.Mixed], required: true },
    fingers: { type: [Schema.Types.Mixed], required: true },
    baseFret: { type: Number, required: true, default: 1 },
    barres: { type: [Number], default: [] },
  },
  { _id: false }
);

const chordSchema = new Schema<IChord>(
  {
    root: {
      type: String,
      required: true,
      enum: [
        "C", "C#", "D", "D#", "E", "F",
        "F#", "G", "G#", "A", "A#", "B",
      ],
    },
    type: {
      type: String,
      required: true,
      enum: [
        "major", "minor", "7", "m7", "maj7",
        "dim", "aug", "sus2", "sus4",
      ],
    },
    suffix: { type: String, required: true },
    positions: { type: [chordPositionSchema], required: true },
  },
  { timestamps: true }
);

chordSchema.index({ root: 1, type: 1 }, { unique: true });
chordSchema.index({ suffix: 1 });

const Chord = models.Chord || model<IChord>("Chord", chordSchema);
export default Chord;
