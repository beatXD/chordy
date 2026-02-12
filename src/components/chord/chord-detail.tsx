"use client";

import { ChordDiagram } from "./chord-diagram";
import { Badge } from "@/components/ui/badge";
import type { IChord } from "@/types";

interface ChordDetailProps {
  chord: IChord;
}

const STRING_NAMES = ["E", "A", "D", "G", "B", "e"];

export function ChordDetail({ chord }: ChordDetailProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{chord.suffix}</h1>
        <Badge variant="secondary" className="text-xs">{chord.root}</Badge>
        <Badge variant="outline" className="text-xs">{chord.type}</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {chord.positions.map((pos, i) => (
          <div key={i} className="flex flex-col items-center gap-2 rounded-lg border p-4">
            <span className="text-xs text-muted-foreground">
              Position {i + 1}
            </span>
            <ChordDiagram
              frets={pos.frets}
              fingers={pos.fingers}
              baseFret={pos.baseFret}
              barres={pos.barres}
              size="lg"
            />
            <div className="flex gap-2 text-xs text-muted-foreground">
              {STRING_NAMES.map((name, j) => (
                <span key={j} className="text-center">
                  <span className="block font-medium">{name}</span>
                  <span>
                    {pos.frets[j] === null
                      ? "x"
                      : pos.frets[j] === 0
                        ? "o"
                        : pos.frets[j]}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
