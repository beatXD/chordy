import { Schema, model, models } from "mongoose";
import type { ISong } from "@/types";

const songSchema = new Schema<ISong>(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    key: { type: String, required: true },
    content: { type: String, required: true },
    genre: { type: String, default: "Pop" },
    tags: { type: [String], default: [] },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

songSchema.index({ title: "text", artist: "text" });
songSchema.index({ genre: 1 });

const Song = models.Song || model<ISong>("Song", songSchema);
export default Song;
