import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";
import Song from "@/models/song.model";
import { SongList } from "@/components/song/song-list";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Favorites",
  description: "เพลงโปรดของคุณ",
};

export default async function FavoritesPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }

  await dbConnect();

  const user = await User.findById(session.user.id)
    .populate({
      path: "favoriteSongs",
      model: Song,
      select: "title artist key genre",
    })
    .lean();

  interface PopulatedSong {
    _id: { toString(): string };
    title: string;
    artist: string;
    key: string;
    genre: string;
    content: string;
    tags: string[];
  }

  const songs = (
    (user?.favoriteSongs || []) as unknown as PopulatedSong[]
  ).map((song) => ({
    _id: song._id.toString(),
    title: song.title,
    artist: song.artist,
    key: song.key,
    genre: song.genre || "Pop",
    content: song.content || "",
    tags: song.tags || [],
  }));

  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold">Favorites</h1>
        <p className="text-muted-foreground">เพลงโปรดของคุณ</p>
      </div>

      {songs.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
          <Heart className="h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">
            ยังไม่มีเพลงโปรด ลองเพิ่มเพลงที่ชอบดูนะ!
          </p>
        </div>
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}
