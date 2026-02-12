import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Song from "@/models/song.model";
import { SongViewer } from "@/components/song/song-viewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  await dbConnect();
  const song = await Song.findById(id).lean();

  if (!song) {
    return { title: "Song Not Found" };
  }

  return {
    title: `${song.title} - ${song.artist}`,
    description: `คอร์ดเพลง ${song.title} โดย ${song.artist}`,
  };
}

export default async function SongDetailPage({ params }: PageProps) {
  const { id } = await params;

  await dbConnect();
  const song = await Song.findById(id).lean();

  if (!song) {
    notFound();
  }

  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/songs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Songs
        </Link>
      </Button>

      <SongViewer
        title={song.title}
        artist={song.artist}
        songKey={song.key}
        content={song.content}
      />
    </div>
  );
}
