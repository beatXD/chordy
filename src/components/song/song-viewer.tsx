"use client";

import { useMemo } from "react";
import { parseSongContent } from "@/lib/constants";
import { useTransposeStore } from "@/stores/transpose-store";
import { ChordLine } from "./chord-line";
import { TransposeControl } from "./transpose-control";
import { AutoScrollControl } from "./auto-scroll";

interface SongViewerProps {
  title: string;
  artist: string;
  songKey: string;
  content: string;
}

export function SongViewer({ title, artist, songKey, content }: SongViewerProps) {
  const semitones = useTransposeStore((s) => s.semitones);
  const lines = useMemo(() => parseSongContent(content), [content]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>

      <TransposeControl originalKey={songKey} />

      <div className="font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <ChordLine key={i} line={line} semitones={semitones} />
        ))}
      </div>

      <AutoScrollControl />
    </div>
  );
}
