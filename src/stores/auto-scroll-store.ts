import { create } from "zustand";

interface AutoScrollState {
  isScrolling: boolean;
  speed: number;
  toggleScrolling: () => void;
  setSpeed: (speed: number) => void;
}

export const useAutoScrollStore = create<AutoScrollState>((set) => ({
  isScrolling: false,
  speed: 3,
  toggleScrolling: () => set((s) => ({ isScrolling: !s.isScrolling })),
  setSpeed: (speed) => set({ speed }),
}));
