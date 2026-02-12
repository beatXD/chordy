"use client";

import { transposeChord, type SongLine } from "@/lib/constants";

interface ChordLineProps {
  line: SongLine;
  semitones: number;
}

export function ChordLine({ line, semitones }: ChordLineProps) {
  if (line.isEmpty) {
    return <div className="h-4" />;
  }

  return (
    <div className="flex flex-wrap">
      {line.segments.map((seg, i) => (
        <span key={i} className="inline-block whitespace-pre">
          <span className="block h-5 text-sm font-bold text-primary">
            {seg.chord ? transposeChord(seg.chord, semitones) : "\u00A0"}
          </span>
          <span className="block">{seg.lyric || "\u00A0"}</span>
        </span>
      ))}
    </div>
  );
}
