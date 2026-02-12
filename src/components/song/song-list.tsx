import { SongCard } from "./song-card";
import type { ISong } from "@/types";

interface SongListProps {
  songs: (ISong & { _id: string })[];
}

export function SongList({ songs }: SongListProps) {
  if (songs.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-muted-foreground">
          ไม่พบเพลง ลองค้นหาด้วยคำอื่น
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground">{songs.length} เพลง</p>
      <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>
    </div>
  );
}
