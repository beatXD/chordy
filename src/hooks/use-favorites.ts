"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export function useFavorites() {
  const { data: session } = useSession();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session?.user) return;

    fetch("/api/favorites")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFavoriteIds(data.map((s: { _id: string }) => s._id));
        }
      })
      .catch(() => {});
  }, [session]);

  const toggleFavorite = useCallback(
    async (songId: string) => {
      if (!session?.user) {
        toast.error("กรุณาเข้าสู่ระบบก่อน");
        return;
      }

      const isFav = favoriteIds.includes(songId);
      setLoading(true);

      try {
        const res = await fetch("/api/favorites", {
          method: isFav ? "DELETE" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ songId }),
        });

        if (!res.ok) throw new Error();

        setFavoriteIds((prev) =>
          isFav ? prev.filter((id) => id !== songId) : [...prev, songId]
        );

        toast.success(isFav ? "ลบออกจากรายการโปรดแล้ว" : "เพิ่มในรายการโปรดแล้ว");
      } catch {
        toast.error("เกิดข้อผิดพลาด");
      } finally {
        setLoading(false);
      }
    },
    [session, favoriteIds]
  );

  const isFavorite = useCallback(
    (songId: string) => favoriteIds.includes(songId),
    [favoriteIds]
  );

  return { favoriteIds, toggleFavorite, isFavorite, loading };
}
