"use client";

import { useEffect, useRef } from "react";
import { useAutoScrollStore } from "@/stores/auto-scroll-store";

export function useAutoScroll() {
  const { isScrolling, speed } = useAutoScrollStore();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isScrolling) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const scroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) {
        useAutoScrollStore.getState().toggleScrolling();
        return;
      }
      window.scrollBy(0, speed * 0.3);
      rafRef.current = requestAnimationFrame(scroll);
    };

    rafRef.current = requestAnimationFrame(scroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isScrolling, speed]);
}
