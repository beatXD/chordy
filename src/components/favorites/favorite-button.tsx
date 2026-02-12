"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  songId: string;
}

export function FavoriteButton({ songId }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite, loading } = useFavorites();
  const fav = isFavorite(songId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      disabled={loading}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(songId);
      }}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-colors",
          fav && "fill-red-500 text-red-500"
        )}
      />
    </Button>
  );
}
