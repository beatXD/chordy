import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Chord from "@/models/chord.model";
import { ChordDetail } from "@/components/chord/chord-detail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ root: string; type: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { root, type } = await params;
  return {
    title: `${root} ${type} Chord`,
    description: `แผนภาพคอร์ด ${root} ${type} สำหรับกีต้า`,
  };
}

export default async function ChordDetailPage({ params }: PageProps) {
  const { root, type } = await params;

  await dbConnect();

  const chord = await Chord.findOne({
    root: decodeURIComponent(root),
    type: decodeURIComponent(type),
  }).lean();

  if (!chord) {
    notFound();
  }

  const serialized = {
    ...chord,
    _id: chord._id.toString(),
  };

  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/chords">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Chords
        </Link>
      </Button>

      <ChordDetail chord={serialized} />
    </div>
  );
}
