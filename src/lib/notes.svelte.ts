export type Note = {
  id: number;
  x: number; // screen px
  y: number; // screen px
  glyph: string;
  driftX: number; // px total horizontal travel
  duration: number; // ms
  rotation: number; // deg
  wobble: number; // wobble amplitude px
};

const GLYPHS = ["♩", "♪", "♫", "♬", "♭", "♮"];

let _id = 0;

// Svelte 5 runes-style reactive state exported as a plain object
export const noteState = $state<{ notes: Note[] }>({ notes: [] });

export function spawnNote(x: number, y: number) {
  const note: Note = {
    id: _id++,
    x,
    y,
    glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    driftX: (Math.random() - 0.5) * 120, // -60 … +60 px
    duration: 1400 + Math.random() * 800, // 1.4 – 2.2 s
    rotation: (Math.random() - 0.5) * 40, // -20 … +20 deg
    wobble: 20 + Math.random() * 30, // 20 – 50 px side-wobble amplitude
  };
  noteState.notes.push(note);

  // Auto-remove after animation
  setTimeout(() => {
    const idx = noteState.notes.findIndex((n) => n.id === note.id);
    if (idx !== -1) noteState.notes.splice(idx, 1);
  }, note.duration + 100);
}
