import { ChordCard } from "./chord-card";
import type { IChord } from "@/types";

interface ChordGridProps {
  chords: IChord[];
}

export function ChordGrid({ chords }: ChordGridProps) {
  if (chords.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-muted-foreground">ไม่พบคอร์ด</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {chords.map((chord) => (
        <ChordCard key={`${chord.root}-${chord.type}`} chord={chord} />
      ))}
    </div>
  );
}
