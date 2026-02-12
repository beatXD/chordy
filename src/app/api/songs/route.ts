import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Song from "@/models/song.model";
import { songQuerySchema } from "@/validators/song.schema";

export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams);
    const query = songQuerySchema.parse(params);

    await dbConnect();

    const filter: Record<string, unknown> = {};
    if (query.search) {
      filter.$text = { $search: query.search };
    }
    if (query.genre) {
      if (query.genre === "thai") {
        filter.genre = { $in: ["Thai Pop", "Thai Rock"] };
      } else if (query.genre === "english") {
        filter.genre = { $nin: ["Thai Pop", "Thai Rock"] };
      } else {
        filter.genre = query.genre;
      }
    }

    const skip = (query.page - 1) * query.limit;

    const [songs, total] = await Promise.all([
      Song.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(query.limit)
        .lean(),
      Song.countDocuments(filter),
    ]);

    return NextResponse.json({
      songs,
      total,
      page: query.page,
      totalPages: Math.ceil(total / query.limit),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch songs" },
      { status: 500 }
    );
  }
}
