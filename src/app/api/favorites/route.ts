import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";
import Song from "@/models/song.model";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const user = await User.findById(session.user.id)
      .populate({
        path: "favoriteSongs",
        model: Song,
        select: "title artist key genre",
      })
      .lean();

    return NextResponse.json(user?.favoriteSongs || []);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { songId } = await request.json();
    if (!songId) {
      return NextResponse.json(
        { error: "songId is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    await User.findByIdAndUpdate(session.user.id, {
      $addToSet: { favoriteSongs: songId },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to add favorite" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { songId } = await request.json();
    if (!songId) {
      return NextResponse.json(
        { error: "songId is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    await User.findByIdAndUpdate(session.user.id, {
      $pull: { favoriteSongs: songId },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to remove favorite" },
      { status: 500 }
    );
  }
}
