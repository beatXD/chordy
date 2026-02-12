import type { Types } from "mongoose";

export interface IChordPosition {
  frets: (number | null)[];
  fingers: (number | null)[];
  baseFret: number;
  barres: number[];
}

export interface IChord {
  _id?: string;
  root: string;
  type: string;
  suffix: string;
  positions: IChordPosition[];
}

export interface ISong {
  _id?: string;
  title: string;
  artist: string;
  key: string;
  content: string;
  genre: string;
  tags: string[];
  createdBy?: Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  image?: string;
  googleId: string;
  favoriteSongs: (Types.ObjectId | string)[];
}
