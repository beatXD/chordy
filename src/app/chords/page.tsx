import { Suspense } from "react";
import type { Metadata } from "next";
import dbConnect from "@/lib/db";
import Chord from "@/models/chord.model";
import { ChordFilter } from "@/components/chord/chord-filter";
import { ChordGrid } from "@/components/chord/chord-grid";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Chord Library",
  description: "ค้นหาคอร์ดกีต้าทุกตัว พร้อมแผนภาพตำแหน่งนิ้ว",
};

interface PageProps {
  searchParams: Promise<{
    root?: string;
    type?: string;
    search?: string;
  }>;
}

async function ChordsContent({
  searchParams,
}: {
  searchParams: { root?: string; type?: string; search?: string };
}) {
  await dbConnect();

  const filter: Record<string, unknown> = {};
  if (searchParams.root) filter.root = searchParams.root;
  if (searchParams.type) filter.type = searchParams.type;
  if (searchParams.search) {
    filter.suffix = { $regex: searchParams.search, $options: "i" };
  }

  const chords = await Chord.find(filter).sort({ root: 1, type: 1 }).lean();

  const serialized = chords.map((c) => ({
    ...c,
    _id: c._id.toString(),
  }));

  return <ChordGrid chords={serialized} />;
}

function ChordsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="h-30 rounded-lg" />
      ))}
    </div>
  );
}

export default async function ChordsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto space-y-4 px-4 py-6">
      <h1 className="text-xl font-bold">Chord Library</h1>

      <Suspense fallback={null}>
        <ChordFilter />
      </Suspense>

      <Suspense fallback={<ChordsSkeleton />}>
        <ChordsContent searchParams={params} />
      </Suspense>
    </div>
  );
}
