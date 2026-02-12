import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { ISong } from "@/types";

interface SongCardProps {
  song: ISong & { _id: string };
}

export function SongCard({ song }: SongCardProps) {
  return (
    <Link
      href={`/songs/${song._id}`}
      className="group flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 transition-colors hover:bg-accent/50"
    >
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium group-hover:text-primary">
          {song.title}
        </h3>
        <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <Badge variant="secondary" className="font-mono text-[10px] px-1.5 py-0">
          {song.key}
        </Badge>
        {song.genre && (
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            {song.genre}
          </Badge>
        )}
      </div>
    </Link>
  );
}
