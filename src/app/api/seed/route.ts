import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Chord from "@/models/chord.model";
import Song from "@/models/song.model";
import { SEED_CHORDS } from "@/data/seed-chords";
import { SEED_SONGS } from "@/data/seed-songs";

export async function POST() {
  try {
    await dbConnect();

    await Promise.all([Chord.deleteMany({}), Song.deleteMany({})]);

    const [chords, songs] = await Promise.all([
      Chord.insertMany(SEED_CHORDS),
      Song.insertMany(SEED_SONGS),
    ]);

    return NextResponse.json({
      success: true,
      chords: chords.length,
      songs: songs.length,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
