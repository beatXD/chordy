import { create } from "zustand";

interface TransposeState {
  semitones: number;
  transposeUp: () => void;
  transposeDown: () => void;
  reset: () => void;
}

export const useTransposeStore = create<TransposeState>((set) => ({
  semitones: 0,
  transposeUp: () => set((s) => ({ semitones: s.semitones + 1 })),
  transposeDown: () => set((s) => ({ semitones: s.semitones - 1 })),
  reset: () => set({ semitones: 0 }),
}));
