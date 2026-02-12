import Link from "next/link";
import { ChordDiagram } from "./chord-diagram";
import type { IChord } from "@/types";

interface ChordCardProps {
  chord: IChord;
}

export function ChordCard({ chord }: ChordCardProps) {
  const position = chord.positions[0];
  if (!position) return null;

  return (
    <Link
      href={`/chords/${chord.root}/${chord.type}`}
      className="flex flex-col items-center gap-1 rounded-lg border p-2 transition-colors hover:bg-accent/50"
    >
      <span className="text-sm font-bold">{chord.suffix}</span>
      <ChordDiagram
        frets={position.frets}
        fingers={position.fingers}
        baseFret={position.baseFret}
        barres={position.barres}
        size="sm"
        showFingers={false}
      />
    </Link>
  );
}
