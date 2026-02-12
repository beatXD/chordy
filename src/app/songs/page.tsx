import { Suspense } from "react";
import type { Metadata } from "next";
import dbConnect from "@/lib/db";
import Song from "@/models/song.model";
import { SongSearch } from "@/components/song/song-search";
import { SongGenreFilter } from "@/components/song/song-genre-filter";
import { SongList } from "@/components/song/song-list";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Songs",
  description: "ค้นหาเพลงพร้อมคอร์ดกีต้า transpose ได้",
};

interface PageProps {
  searchParams: Promise<{
    search?: string;
    genre?: string;
    page?: string;
  }>;
}

async function SongsContent({
  searchParams,
}: {
  searchParams: { search?: string; genre?: string; page?: string };
}) {
  await dbConnect();

  const filter: Record<string, unknown> = {};
  if (searchParams.search) {
    filter.$or = [
      { title: { $regex: searchParams.search, $options: "i" } },
      { artist: { $regex: searchParams.search, $options: "i" } },
    ];
  }
  if (searchParams.genre) {
    filter.genre = searchParams.genre;
  }

  const songs = await Song.find(filter)
    .sort({ createdAt: -1 })
    .limit(20)
    .lean();

  const serialized = songs.map((s) => ({
    ...s,
    _id: s._id.toString(),
    createdBy: s.createdBy?.toString(),
    createdAt: s.createdAt ? new Date(s.createdAt) : undefined,
    updatedAt: s.updatedAt ? new Date(s.updatedAt) : undefined,
  }));

  return <SongList songs={serialized} />;
}

function SongsSkeleton() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-16 rounded-lg" />
      ))}
    </div>
  );
}

export default async function SongsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto space-y-4 px-4 py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-bold">Songs</h1>
        <Suspense fallback={null}>
          <SongSearch />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <SongGenreFilter />
      </Suspense>

      <Suspense fallback={<SongsSkeleton />}>
        <SongsContent searchParams={params} />
      </Suspense>
    </div>
  );
}
