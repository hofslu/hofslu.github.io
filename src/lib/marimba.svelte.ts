// Ordered key node names — natural keys (plate.C2–plate.C7) + sharp/flat keys (Cube.010–Cube.035)
// 61 keys total = C2–C7 chromatic (5-octave marimba)
export const KEY_NAMES: string[] = [
  // Natural keys C2–C7 (36 total)
  "plate.C2",
  "plate.D2",
  "plate.E2",
  "plate.F2",
  "plate.G2",
  "plate.A2",
  "plate.B2",
  "plate.C3",
  "plate.D3",
  "plate.E3",
  "plate.F3",
  "plate.G3",
  "plate.A3",
  "plate.B3",
  "plate.C4",
  "plate.D4",
  "plate.E4",
  "plate.F4",
  "plate.G4",
  "plate.A4",
  "plate.B4",
  "plate.C5",
  "plate.D5",
  "plate.E5",
  "plate.F5",
  "plate.G5",
  "plate.A5",
  "plate.B5",
  "plate.C6",
  "plate.D6",
  "plate.E6",
  "plate.F6",
  "plate.G6",
  "plate.A6",
  "plate.B6",
  "plate.C7",
  // Sharp/flat keys (25 total) — sorted low→high
  "plate.Cs2",
  "plate.Ds2",
  "plate.Fs2",
  "plate.Gs2",
  "plate.As2",
  "plate.Cs3",
  "plate.Ds3",
  "plate.Fs3",
  "plate.Gs3",
  "plate.As3",
  "plate.Cs4",
  "plate.Ds4",
  "plate.Fs4",
  "plate.Gs4",
  "plate.As4",
  "plate.Cs5",
  "plate.Ds5",
  "plate.Fs5",
  "plate.Gs5",
  "plate.As5",
  "plate.Cs6",
  "plate.Ds6",
  "plate.Fs6",
  "plate.Gs6",
  "plate.As6",
];

// Note labels C2–C7 (chromatic, 61 notes)
const SEMITONES = [
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
];
export const NOTE_LABELS: string[] = [];
for (let oct = 2; oct <= 7; oct++) {
  for (const s of SEMITONES) {
    if (NOTE_LABELS.length >= 61) break;
    NOTE_LABELS.push(`${s}${oct}`);
  }
}

// Shared play queue — Marimba.svelte drains this each frame
export const marimbaState = $state<{
  pending: string[];
  // Registered by Marimba.svelte once keys are loaded; called by Score directly
  triggerByIndex: ((idx: number) => void) | null;
}>({ pending: [], triggerByIndex: null });

/** Programmatically strike a marimba key by its mesh node name */
export function playKey(meshName: string) {
  marimbaState.pending.push(meshName);
}

/** Convenience: play by chromatic index (0 = C2, 60 = C7) */
export function playKeyByIndex(idx: number) {
  if (marimbaState.triggerByIndex) {
    marimbaState.triggerByIndex(idx);
  } else {
    // Fallback to name-based queue if Marimba hasn't registered yet
    const name = KEY_NAMES[idx];
    if (name) playKey(name);
  }
}
