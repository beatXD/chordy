import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Chord from "@/models/chord.model";
import { chordQuerySchema } from "@/validators/chord.schema";

export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams);
    const query = chordQuerySchema.parse(params);

    await dbConnect();

    const filter: Record<string, unknown> = {};
    if (query.root) filter.root = query.root;
    if (query.type) filter.type = query.type;
    if (query.search) {
      filter.suffix = { $regex: query.search, $options: "i" };
    }

    const chords = await Chord.find(filter).sort({ root: 1, type: 1 }).lean();

    return NextResponse.json(chords);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch chords" },
      { status: 500 }
    );
  }
}
