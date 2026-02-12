"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NOTES, CHORD_TYPES } from "@/lib/constants";

export function ChordFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeRoot = searchParams.get("root") || "";
  const activeType = searchParams.get("type") || "";

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/chords?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Root Note
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {NOTES.map((note) => (
            <Button
              key={note}
              variant={activeRoot === note ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter("root", note)}
              className="h-8 min-w-[2.5rem]"
            >
              {note}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Chord Type
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {CHORD_TYPES.map((ct) => (
            <Badge
              key={ct.value}
              variant={activeType === ct.value ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => updateFilter("type", ct.value)}
            >
              {ct.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
