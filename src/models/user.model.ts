import { Schema, model, models } from "mongoose";
import type { IUser } from "@/types";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    googleId: { type: String, required: true, unique: true },
    favoriteSongs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);
export default User;
