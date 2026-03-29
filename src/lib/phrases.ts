// Short musical phrases triggered on each section enter.
// Indices are KEY_NAMES positions (0 = plate.C2):
//   C3=7  D3=8  E3=9  F3=10 G3=11 A3=12 B3=13
//   C4=14 D4=15 E4=16 F4=17 G4=18 A4=19 B4=20
//   C5=21 D5=22 E5=23 F5=24 G5=25
//   Cs4=46 Ds4=47 Fs4=48 Gs4=49 As4=50

export type PhraseBeat = { ms: number; idx: number };
export type Phrase = PhraseBeat[];

export const PHRASES: Phrase[] = [
  // 1 — About: C major arpeggio, gentle ascending
  [
    { ms: 0, idx: 7 }, // C3
    { ms: 170, idx: 9 }, // E3
    { ms: 340, idx: 11 }, // G3
    { ms: 510, idx: 14 }, // C4
    { ms: 680, idx: 16 }, // E4
    { ms: 850, idx: 18 }, // G4
  ],

  // 2 — Recordings: jazz run, bounce back
  [
    { ms: 0, idx: 14 }, // C4
    { ms: 140, idx: 16 }, // E4
    { ms: 280, idx: 18 }, // G4
    { ms: 420, idx: 19 }, // A4
    { ms: 560, idx: 21 }, // C5
    { ms: 730, idx: 18 }, // G4 — bounce
  ],

  // 3 — Calendar: octave pairs ringing together
  [
    { ms: 0, idx: 7 }, // C3 ]
    { ms: 0, idx: 14 }, // C4 ] together
    { ms: 380, idx: 11 }, // G3 ]
    { ms: 380, idx: 18 }, // G4 ] together
    { ms: 760, idx: 9 }, // E3 ]
    { ms: 760, idx: 16 }, // E4 ] together
    { ms: 1100, idx: 14 }, // C4 ]
    { ms: 1100, idx: 21 }, // C5 ] together
  ],

  // 4 — Projects: chromatic descent (a little dramatic)
  [
    { ms: 0, idx: 16 }, // E4
    { ms: 150, idx: 47 }, // Ds4
    { ms: 300, idx: 15 }, // D4
    { ms: 450, idx: 46 }, // Cs4
    { ms: 600, idx: 14 }, // C4
    { ms: 780, idx: 7 }, // C3 — land low
  ],

  // 5 — Contact: descending resolution, warmly closing
  [
    { ms: 0, idx: 25 }, // G5
    { ms: 220, idx: 21 }, // C5
    { ms: 440, idx: 18 }, // G4
    { ms: 660, idx: 16 }, // E4
    { ms: 880, idx: 14 }, // C4
    { ms: 1100, idx: 7 }, // C3
  ],
];
