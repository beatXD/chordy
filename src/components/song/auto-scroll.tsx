"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Pause, Play } from "lucide-react";
import { useAutoScrollStore } from "@/stores/auto-scroll-store";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

export function AutoScrollControl() {
  useAutoScroll();

  const { isScrolling, speed, toggleScrolling, setSpeed } =
    useAutoScrollStore();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border bg-background/95 px-4 py-2 shadow-lg backdrop-blur">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={toggleScrolling}
      >
        {isScrolling ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <Slider
        value={[speed]}
        onValueChange={([v]) => setSpeed(v)}
        min={1}
        max={10}
        step={1}
        className="w-24"
      />
      <span className="min-w-[1.5rem] text-center text-xs text-muted-foreground">
        {speed}x
      </span>
    </div>
  );
}
