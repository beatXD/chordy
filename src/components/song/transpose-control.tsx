"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { useTransposeStore } from "@/stores/transpose-store";
import { transposeChord } from "@/lib/constants";

interface TransposeControlProps {
  originalKey: string;
}

export function TransposeControl({ originalKey }: TransposeControlProps) {
  const { semitones, transposeUp, transposeDown, reset } =
    useTransposeStore();

  const currentKey = transposeChord(originalKey, semitones);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Key:</span>
      <Badge variant="secondary" className="min-w-[2rem] justify-center">
        {currentKey}
      </Badge>
      <div className="flex items-center gap-1">
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={transposeDown}>
          <Minus className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={transposeUp}>
          <Plus className="h-3 w-3" />
        </Button>
        {semitones !== 0 && (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={reset}>
            <RotateCcw className="h-3 w-3" />
          </Button>
        )}
      </div>
      {semitones !== 0 && (
        <span className="text-xs text-muted-foreground">
          {semitones > 0 ? `+${semitones}` : semitones}
        </span>
      )}
    </div>
  );
}
