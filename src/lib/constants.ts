export const NOTES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

export type Note = (typeof NOTES)[number];

export const NOTE_ALIASES: Record<string, string> = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
};

export const CHORD_TYPES = [
  { value: "major", label: "Major", suffix: "" },
  { value: "minor", label: "Minor", suffix: "m" },
  { value: "7", label: "7th", suffix: "7" },
  { value: "m7", label: "Minor 7th", suffix: "m7" },
  { value: "maj7", label: "Major 7th", suffix: "maj7" },
  { value: "dim", label: "Diminished", suffix: "dim" },
  { value: "aug", label: "Augmented", suffix: "aug" },
  { value: "sus2", label: "Sus2", suffix: "sus2" },
  { value: "sus4", label: "Sus4", suffix: "sus4" },
] as const;

export type ChordType = (typeof CHORD_TYPES)[number]["value"];

export function transposeChord(chord: string, semitones: number): string {
  const match = chord.match(/^([A-G][#b]?)(.*)$/);
  if (!match) return chord;

  let [, root, quality] = match;
  root = NOTE_ALIASES[root] || root;

  const index = NOTES.indexOf(root as Note);
  if (index === -1) return chord;

  const newIndex = ((index + semitones) % 12 + 12) % 12;
  return NOTES[newIndex] + quality;
}

export interface SongSegment {
  chord?: string;
  lyric: string;
}

export interface SongLine {
  segments: SongSegment[];
  isEmpty: boolean;
}

export function parseSongContent(content: string): SongLine[] {
  return content.split("\n").map((line) => {
    if (line.trim() === "") return { segments: [], isEmpty: true };

    const segments: SongSegment[] = [];
    const regex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        if (segments.length > 0) {
          segments[segments.length - 1].lyric = line.slice(
            lastIndex,
            match.index
          );
        } else {
          segments.push({ lyric: line.slice(lastIndex, match.index) });
        }
      }
      segments.push({ chord: match[1], lyric: "" });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      if (segments.length > 0) {
        segments[segments.length - 1].lyric = line.slice(lastIndex);
      } else {
        segments.push({ lyric: line.slice(lastIndex) });
      }
    }

    return { segments, isEmpty: false };
  });
}
