import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Song from "@/models/song.model";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await dbConnect();
    const song = await Song.findById(id).lean();

    if (!song) {
      return NextResponse.json({ error: "Song not found" }, { status: 404 });
    }

    return NextResponse.json(song);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch song" },
      { status: 500 }
    );
  }
}
