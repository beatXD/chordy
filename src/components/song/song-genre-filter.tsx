"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const GENRES = [
  { value: "", label: "ทั้งหมด" },
  { value: "thai", label: "เพลงไทย" },
  { value: "english", label: "English" },
  { value: "Pop", label: "Pop" },
  { value: "Rock", label: "Rock" },
  { value: "Folk", label: "Folk" },
  { value: "Soul", label: "Soul" },
  { value: "Indie Pop", label: "Indie" },
  { value: "Thai Pop", label: "Thai Pop" },
  { value: "Thai Rock", label: "Thai Rock" },
];

export function SongGenreFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeGenre = searchParams.get("genre") || "";

  const handleGenreClick = (genre: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (genre) {
      params.set("genre", genre);
    } else {
      params.delete("genre");
    }
    params.delete("page");
    router.push(`/songs?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-1.5">
      {GENRES.map((genre) => (
        <button
          key={genre.value}
          onClick={() => handleGenreClick(genre.value)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            activeGenre === genre.value
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
          )}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}
