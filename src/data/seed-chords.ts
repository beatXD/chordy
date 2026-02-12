import type { IChordPosition } from "@/types";

interface SeedChord {
  root: string;
  type: string;
  suffix: string;
  positions: IChordPosition[];
}

export const SEED_CHORDS: SeedChord[] = [
  // ─── C ──────────────────────────────────────────────
  {
    root: "C",
    type: "major",
    suffix: "C",
    positions: [
      {
        frets: [null, 3, 2, 0, 1, 0],
        fingers: [null, 3, 2, null, 1, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "minor",
    suffix: "Cm",
    positions: [
      {
        frets: [null, 1, 1, 0, 1, null],
        fingers: [null, 1, 2, null, 3, null],
        baseFret: 3,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "7",
    suffix: "C7",
    positions: [
      {
        frets: [null, 3, 2, 3, 1, 0],
        fingers: [null, 3, 2, 4, 1, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "m7",
    suffix: "Cm7",
    positions: [
      {
        frets: [null, 1, 1, 3, 1, 1],
        fingers: [null, 1, 1, 3, 1, 1],
        baseFret: 3,
        barres: [1],
      },
    ],
  },
  {
    root: "C",
    type: "maj7",
    suffix: "Cmaj7",
    positions: [
      {
        frets: [null, 3, 2, 0, 0, 0],
        fingers: [null, 3, 2, null, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "dim",
    suffix: "Cdim",
    positions: [
      {
        frets: [null, 3, 4, 2, 4, null],
        fingers: [null, 2, 3, 1, 4, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "aug",
    suffix: "Caug",
    positions: [
      {
        frets: [null, 3, 2, 1, 1, 0],
        fingers: [null, 4, 3, 1, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "sus2",
    suffix: "Csus2",
    positions: [
      {
        frets: [null, 3, 3, 0, 1, 3],
        fingers: [null, 2, 3, null, 1, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C",
    type: "sus4",
    suffix: "Csus4",
    positions: [
      {
        frets: [null, 3, 3, 0, 1, 1],
        fingers: [null, 3, 4, null, 1, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },

  // ─── C# ─────────────────────────────────────────────
  {
    root: "C#",
    type: "major",
    suffix: "C#",
    positions: [
      {
        frets: [null, 1, 1, 1, 1, 1],
        fingers: [null, 1, 1, 2, 3, 4],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "C#",
    type: "minor",
    suffix: "C#m",
    positions: [
      {
        frets: [null, 1, 1, 0, 1, null],
        fingers: [null, 1, 2, null, 3, null],
        baseFret: 4,
        barres: [],
      },
    ],
  },
  {
    root: "C#",
    type: "7",
    suffix: "C#7",
    positions: [
      {
        frets: [null, 1, 1, 1, 0, 1],
        fingers: [null, 1, 1, 2, null, 3],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "C#",
    type: "m7",
    suffix: "C#m7",
    positions: [
      {
        frets: [null, 1, 1, 1, 1, 1],
        fingers: [null, 1, 1, 1, 1, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "C#",
    type: "maj7",
    suffix: "C#maj7",
    positions: [
      {
        frets: [null, 1, 1, 1, 1, 0],
        fingers: [null, 1, 1, 2, 3, null],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "C#",
    type: "dim",
    suffix: "C#dim",
    positions: [
      {
        frets: [null, 4, 5, 3, 5, null],
        fingers: [null, 2, 3, 1, 4, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C#",
    type: "aug",
    suffix: "C#aug",
    positions: [
      {
        frets: [null, 4, 3, 2, 2, null],
        fingers: [null, 4, 3, 1, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "C#",
    type: "sus2",
    suffix: "C#sus2",
    positions: [
      {
        frets: [null, 1, 1, 3, 1, 1],
        fingers: [null, 1, 1, 3, 1, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "C#",
    type: "sus4",
    suffix: "C#sus4",
    positions: [
      {
        frets: [null, 1, 1, 1, 2, 1],
        fingers: [null, 1, 1, 1, 2, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },

  // ─── D ──────────────────────────────────────────────
  {
    root: "D",
    type: "major",
    suffix: "D",
    positions: [
      {
        frets: [null, null, 0, 2, 3, 2],
        fingers: [null, null, null, 1, 3, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "minor",
    suffix: "Dm",
    positions: [
      {
        frets: [null, null, 0, 2, 3, 1],
        fingers: [null, null, null, 2, 3, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "7",
    suffix: "D7",
    positions: [
      {
        frets: [null, null, 0, 2, 1, 2],
        fingers: [null, null, null, 2, 1, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "m7",
    suffix: "Dm7",
    positions: [
      {
        frets: [null, null, 0, 2, 1, 1],
        fingers: [null, null, null, 2, 1, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "D",
    type: "maj7",
    suffix: "Dmaj7",
    positions: [
      {
        frets: [null, null, 0, 2, 2, 2],
        fingers: [null, null, null, 1, 2, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "dim",
    suffix: "Ddim",
    positions: [
      {
        frets: [null, null, 0, 1, 3, 1],
        fingers: [null, null, null, 1, 3, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "aug",
    suffix: "Daug",
    positions: [
      {
        frets: [null, null, 0, 3, 3, 2],
        fingers: [null, null, null, 2, 3, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "sus2",
    suffix: "Dsus2",
    positions: [
      {
        frets: [null, null, 0, 2, 3, 0],
        fingers: [null, null, null, 1, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D",
    type: "sus4",
    suffix: "Dsus4",
    positions: [
      {
        frets: [null, null, 0, 2, 3, 3],
        fingers: [null, null, null, 1, 2, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },

  // ─── D# ─────────────────────────────────────────────
  {
    root: "D#",
    type: "major",
    suffix: "D#",
    positions: [
      {
        frets: [null, null, 1, 1, 1, null],
        fingers: [null, null, 1, 2, 3, null],
        baseFret: 5,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "minor",
    suffix: "D#m",
    positions: [
      {
        frets: [null, null, 1, 3, 4, 2],
        fingers: [null, null, 1, 3, 4, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "7",
    suffix: "D#7",
    positions: [
      {
        frets: [null, null, 1, 3, 2, 3],
        fingers: [null, null, 1, 3, 2, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "m7",
    suffix: "D#m7",
    positions: [
      {
        frets: [null, null, 1, 3, 2, 2],
        fingers: [null, null, 1, 4, 2, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "maj7",
    suffix: "D#maj7",
    positions: [
      {
        frets: [null, null, 1, 3, 3, 3],
        fingers: [null, null, 1, 2, 3, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "dim",
    suffix: "D#dim",
    positions: [
      {
        frets: [null, null, 1, 2, 4, 2],
        fingers: [null, null, 1, 2, 4, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "aug",
    suffix: "D#aug",
    positions: [
      {
        frets: [null, null, 1, 0, 0, 3],
        fingers: [null, null, 1, null, null, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "D#",
    type: "sus2",
    suffix: "D#sus2",
    positions: [
      {
        frets: [null, null, 1, 3, 4, 1],
        fingers: [null, null, 1, 3, 4, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "D#",
    type: "sus4",
    suffix: "D#sus4",
    positions: [
      {
        frets: [null, null, 1, 3, 4, 4],
        fingers: [null, null, 1, 2, 3, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },

  // ─── E ──────────────────────────────────────────────
  {
    root: "E",
    type: "major",
    suffix: "E",
    positions: [
      {
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [null, 2, 3, 1, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "minor",
    suffix: "Em",
    positions: [
      {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [null, 2, 3, null, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "7",
    suffix: "E7",
    positions: [
      {
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [null, 2, null, 1, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "m7",
    suffix: "Em7",
    positions: [
      {
        frets: [0, 2, 0, 0, 0, 0],
        fingers: [null, 2, null, null, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "maj7",
    suffix: "Emaj7",
    positions: [
      {
        frets: [0, 2, 1, 1, 0, 0],
        fingers: [null, 3, 1, 2, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "dim",
    suffix: "Edim",
    positions: [
      {
        frets: [0, 1, 2, 0, null, null],
        fingers: [null, 1, 2, null, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "aug",
    suffix: "Eaug",
    positions: [
      {
        frets: [0, 3, 2, 1, 1, 0],
        fingers: [null, 4, 3, 1, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "sus2",
    suffix: "Esus2",
    positions: [
      {
        frets: [0, 2, 4, 4, 0, 0],
        fingers: [null, 1, 3, 4, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "E",
    type: "sus4",
    suffix: "Esus4",
    positions: [
      {
        frets: [0, 2, 2, 2, 0, 0],
        fingers: [null, 1, 2, 3, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },

  // ─── F ──────────────────────────────────────────────
  {
    root: "F",
    type: "major",
    suffix: "F",
    positions: [
      {
        frets: [1, 1, 2, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "F",
    type: "minor",
    suffix: "Fm",
    positions: [
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "F",
    type: "7",
    suffix: "F7",
    positions: [
      {
        frets: [1, 1, 2, 1, 3, 1],
        fingers: [1, 1, 2, 1, 3, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "F",
    type: "m7",
    suffix: "Fm7",
    positions: [
      {
        frets: [1, 1, 1, 1, 3, 1],
        fingers: [1, 1, 1, 1, 3, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "F",
    type: "maj7",
    suffix: "Fmaj7",
    positions: [
      {
        frets: [null, null, 3, 2, 1, 0],
        fingers: [null, null, 3, 2, 1, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "F",
    type: "dim",
    suffix: "Fdim",
    positions: [
      {
        frets: [null, null, 3, 1, 0, 1],
        fingers: [null, null, 4, 1, null, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "F",
    type: "aug",
    suffix: "Faug",
    positions: [
      {
        frets: [null, null, 3, 2, 2, 1],
        fingers: [null, null, 4, 2, 3, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "F",
    type: "sus2",
    suffix: "Fsus2",
    positions: [
      {
        frets: [null, null, 3, 0, 1, 1],
        fingers: [null, null, 3, null, 1, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "F",
    type: "sus4",
    suffix: "Fsus4",
    positions: [
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },

  // ─── F# ─────────────────────────────────────────────
  {
    root: "F#",
    type: "major",
    suffix: "F#",
    positions: [
      {
        frets: [1, 1, 2, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "minor",
    suffix: "F#m",
    positions: [
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "7",
    suffix: "F#7",
    positions: [
      {
        frets: [1, 1, 2, 1, 3, 1],
        fingers: [1, 1, 2, 1, 3, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "m7",
    suffix: "F#m7",
    positions: [
      {
        frets: [1, 1, 1, 1, 3, 1],
        fingers: [1, 1, 1, 1, 3, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "maj7",
    suffix: "F#maj7",
    positions: [
      {
        frets: [1, 1, 2, 3, 3, 0],
        fingers: [1, 1, 2, 3, 4, null],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "dim",
    suffix: "F#dim",
    positions: [
      {
        frets: [null, null, 4, 2, 1, 2],
        fingers: [null, null, 4, 2, 1, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "F#",
    type: "aug",
    suffix: "F#aug",
    positions: [
      {
        frets: [null, null, 4, 3, 3, 2],
        fingers: [null, null, 4, 2, 3, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "F#",
    type: "sus2",
    suffix: "F#sus2",
    positions: [
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "F#",
    type: "sus4",
    suffix: "F#sus4",
    positions: [
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },

  // ─── G ──────────────────────────────────────────────
  {
    root: "G",
    type: "major",
    suffix: "G",
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, null, null, null, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "minor",
    suffix: "Gm",
    positions: [
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        baseFret: 3,
        barres: [1],
      },
    ],
  },
  {
    root: "G",
    type: "7",
    suffix: "G7",
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 1],
        fingers: [3, 2, null, null, null, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "m7",
    suffix: "Gm7",
    positions: [
      {
        frets: [1, 1, 1, 1, 3, 1],
        fingers: [1, 1, 1, 1, 3, 1],
        baseFret: 3,
        barres: [1],
      },
    ],
  },
  {
    root: "G",
    type: "maj7",
    suffix: "Gmaj7",
    positions: [
      {
        frets: [3, 2, 0, 0, 0, 2],
        fingers: [3, 1, null, null, null, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "dim",
    suffix: "Gdim",
    positions: [
      {
        frets: [3, 4, 2, 3, null, null],
        fingers: [2, 3, 1, 4, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "aug",
    suffix: "Gaug",
    positions: [
      {
        frets: [3, 2, 1, 0, 0, 3],
        fingers: [3, 2, 1, null, null, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "sus2",
    suffix: "Gsus2",
    positions: [
      {
        frets: [3, 0, 0, 0, 3, 3],
        fingers: [1, null, null, null, 3, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G",
    type: "sus4",
    suffix: "Gsus4",
    positions: [
      {
        frets: [3, 2, 0, 0, 1, 3],
        fingers: [3, 2, null, null, 1, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },

  // ─── G# ─────────────────────────────────────────────
  {
    root: "G#",
    type: "major",
    suffix: "G#",
    positions: [
      {
        frets: [1, 1, 2, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "minor",
    suffix: "G#m",
    positions: [
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 3, 4, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "7",
    suffix: "G#7",
    positions: [
      {
        frets: [1, 1, 2, 1, 3, 1],
        fingers: [1, 1, 2, 1, 3, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "m7",
    suffix: "G#m7",
    positions: [
      {
        frets: [1, 1, 1, 1, 3, 1],
        fingers: [1, 1, 1, 1, 3, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "maj7",
    suffix: "G#maj7",
    positions: [
      {
        frets: [1, 1, 2, 3, 3, 0],
        fingers: [1, 1, 2, 3, 4, null],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "dim",
    suffix: "G#dim",
    positions: [
      {
        frets: [4, 5, 3, 4, null, null],
        fingers: [2, 3, 1, 4, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G#",
    type: "aug",
    suffix: "G#aug",
    positions: [
      {
        frets: [null, 3, 2, 1, 1, null],
        fingers: [null, 4, 3, 1, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "G#",
    type: "sus2",
    suffix: "G#sus2",
    positions: [
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },
  {
    root: "G#",
    type: "sus4",
    suffix: "G#sus4",
    positions: [
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        baseFret: 4,
        barres: [1],
      },
    ],
  },

  // ─── A ──────────────────────────────────────────────
  {
    root: "A",
    type: "major",
    suffix: "A",
    positions: [
      {
        frets: [null, 0, 2, 2, 2, 0],
        fingers: [null, null, 1, 2, 3, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "minor",
    suffix: "Am",
    positions: [
      {
        frets: [null, 0, 2, 2, 1, 0],
        fingers: [null, null, 2, 3, 1, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "7",
    suffix: "A7",
    positions: [
      {
        frets: [null, 0, 2, 0, 2, 0],
        fingers: [null, null, 1, null, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "m7",
    suffix: "Am7",
    positions: [
      {
        frets: [null, 0, 2, 0, 1, 0],
        fingers: [null, null, 2, null, 1, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "maj7",
    suffix: "Amaj7",
    positions: [
      {
        frets: [null, 0, 2, 1, 2, 0],
        fingers: [null, null, 2, 1, 3, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "dim",
    suffix: "Adim",
    positions: [
      {
        frets: [null, 0, 1, 2, 1, null],
        fingers: [null, null, 1, 3, 2, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "aug",
    suffix: "Aaug",
    positions: [
      {
        frets: [null, 0, 3, 2, 2, 1],
        fingers: [null, null, 4, 2, 3, 1],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "sus2",
    suffix: "Asus2",
    positions: [
      {
        frets: [null, 0, 2, 2, 0, 0],
        fingers: [null, null, 1, 2, null, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A",
    type: "sus4",
    suffix: "Asus4",
    positions: [
      {
        frets: [null, 0, 2, 2, 3, 0],
        fingers: [null, null, 1, 2, 3, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },

  // ─── A# ─────────────────────────────────────────────
  {
    root: "A#",
    type: "major",
    suffix: "A#",
    positions: [
      {
        frets: [null, 1, 1, 3, 3, 1],
        fingers: [null, 1, 1, 2, 3, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "minor",
    suffix: "A#m",
    positions: [
      {
        frets: [null, 1, 1, 3, 2, 1],
        fingers: [null, 1, 1, 4, 2, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "7",
    suffix: "A#7",
    positions: [
      {
        frets: [null, 1, 1, 1, 3, 1],
        fingers: [null, 1, 1, 1, 3, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "m7",
    suffix: "A#m7",
    positions: [
      {
        frets: [null, 1, 1, 1, 2, 1],
        fingers: [null, 1, 1, 1, 2, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "maj7",
    suffix: "A#maj7",
    positions: [
      {
        frets: [null, 1, 3, 2, 3, 1],
        fingers: [null, 1, 3, 2, 4, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "dim",
    suffix: "A#dim",
    positions: [
      {
        frets: [null, 1, 2, 3, 2, null],
        fingers: [null, 1, 2, 4, 3, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A#",
    type: "aug",
    suffix: "A#aug",
    positions: [
      {
        frets: [null, 1, 0, 3, 3, 2],
        fingers: [null, 1, null, 3, 4, 2],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "A#",
    type: "sus2",
    suffix: "A#sus2",
    positions: [
      {
        frets: [null, 1, 1, 3, 1, 1],
        fingers: [null, 1, 1, 3, 1, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },
  {
    root: "A#",
    type: "sus4",
    suffix: "A#sus4",
    positions: [
      {
        frets: [null, 1, 1, 3, 4, 1],
        fingers: [null, 1, 1, 2, 3, 1],
        baseFret: 1,
        barres: [1],
      },
    ],
  },

  // ─── B ──────────────────────────────────────────────
  {
    root: "B",
    type: "major",
    suffix: "B",
    positions: [
      {
        frets: [null, 1, 1, 3, 3, 1],
        fingers: [null, 1, 1, 2, 3, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "B",
    type: "minor",
    suffix: "Bm",
    positions: [
      {
        frets: [null, 1, 1, 3, 2, 1],
        fingers: [null, 1, 1, 4, 2, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "B",
    type: "7",
    suffix: "B7",
    positions: [
      {
        frets: [null, 2, 1, 2, 0, 2],
        fingers: [null, 2, 1, 3, null, 4],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "B",
    type: "m7",
    suffix: "Bm7",
    positions: [
      {
        frets: [null, 2, 0, 2, 0, 2],
        fingers: [null, 1, null, 2, null, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "B",
    type: "maj7",
    suffix: "Bmaj7",
    positions: [
      {
        frets: [null, 1, 3, 2, 3, 1],
        fingers: [null, 1, 3, 2, 4, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "B",
    type: "dim",
    suffix: "Bdim",
    positions: [
      {
        frets: [null, 2, 3, 4, 3, null],
        fingers: [null, 1, 2, 4, 3, null],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "B",
    type: "aug",
    suffix: "Baug",
    positions: [
      {
        frets: [null, 2, 1, 0, 0, 3],
        fingers: [null, 2, 1, null, null, 3],
        baseFret: 1,
        barres: [],
      },
    ],
  },
  {
    root: "B",
    type: "sus2",
    suffix: "Bsus2",
    positions: [
      {
        frets: [null, 1, 1, 3, 1, 1],
        fingers: [null, 1, 1, 3, 1, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
  {
    root: "B",
    type: "sus4",
    suffix: "Bsus4",
    positions: [
      {
        frets: [null, 1, 1, 3, 4, 1],
        fingers: [null, 1, 1, 2, 3, 1],
        baseFret: 2,
        barres: [1],
      },
    ],
  },
];
