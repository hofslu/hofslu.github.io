<script lang="ts">
  import { playKeyByIndex } from './marimba.svelte.ts';

  type Chord = { t: number; keys: number[] };

  // ─── Right hand (treble) – 2 mallets ─────────────────────────────────────
  const RH: Chord[] = [
    { t: 0.01, keys: [24, 28] },  // C4+E4 (3rd)
    { t: 0.06, keys: [30, 35] },  // F#4♯+B4 (tritone passing)
    { t: 0.11, keys: [31, 35] },  // G4+B4 (3rd)
    { t: 0.16, keys: [36, 40] },  // C5+E5 (3rd)
    { t: 0.21, keys: [37, 43] },  // C#5♯+G5 (dim 5th)
    { t: 0.26, keys: [40, 43] },  // E5+G5 (3rd)
    { t: 0.32, keys: [43, 48] },  // G5+C6 (4th)
    { t: 0.38, keys: [36, 48] },  // C5+C6 (octave!)
    { t: 0.44, keys: [36, 40] },  // C5+E5
    { t: 0.49, keys: [33, 38] },  // A4+D5 (4th)
    { t: 0.54, keys: [32, 36] },  // G#4♯+C5 (aug 3rd)
    { t: 0.59, keys: [28, 33] },  // E4+A4 (4th)
    { t: 0.64, keys: [26, 31] },  // D4+G4 (4th)
    { t: 0.69, keys: [24, 28] },  // C4+E4
    { t: 0.76, keys: [24, 36] },  // C4+C5 (octave!)
    { t: 0.82, keys: [28, 35] },  // E4+B4 (5th)
    { t: 0.88, keys: [31, 40] },  // G4+E5 (6th)
    { t: 0.93, keys: [36, 43] },  // C5+G5 (5th)
    { t: 0.99, keys: [24, 36] },  // C4+C5 finale (octave)
  ];

  // ─── Left hand (bass) – 2 mallets, I–V–IV–I in C ─────────────────────────
  const LH: Chord[] = [
    { t: 0.03, keys: [12, 19] },  // C3+G3 (5th)
    { t: 0.10, keys: [ 8, 16] },  // G#2♯+E3 (chromatic)
    { t: 0.20, keys: [12, 17] },  // C3+F3 (4th sus)
    { t: 0.28, keys: [ 7, 19] },  // G2+G3 (octave!)
    { t: 0.35, keys: [14, 21] },  // D3+A3 (5th)
    { t: 0.43, keys: [16, 23] },  // E3+B3 (5th)
    { t: 0.52, keys: [18, 21] },  // F#3♯+A3 (3rd with sharp)
    { t: 0.60, keys: [12, 21] },  // C3+A3 (6th)
    { t: 0.67, keys: [13, 24] },  // C#3♯+C4 (7th, ledger)
    { t: 0.77, keys: [12, 19] },  // C3+G3 (5th)
    { t: 0.88, keys: [ 7, 19] },  // G2+G3 (octave)
    { t: 0.97, keys: [ 0, 12] },  // C2+C3 (octave finale, lowest!)
  ];

  // ─── Grand staff geometry ─────────────────────────────────────────────────
  const SCORE_H   = 165;
  const PAD_L     = 58;
  const PAD_R     = 18;
  const LINE_GAP  = 11;
  const HALF_STEP = LINE_GAP / 2;

  // Treble staff: bottom=E4, top=F5
  const T_BOT = 65;
  const T_TOP = T_BOT - 4 * LINE_GAP;   // 21
  const T_MID = T_BOT - 2 * LINE_GAP;   // 43 (B4)

  // Bass staff: bottom=G2, top=A3  (30 px gap for middle C space)
  const B_BOT = 139;
  const B_TOP = B_BOT - 4 * LINE_GAP;   // 95
  const B_MID = B_BOT - 2 * LINE_GAP;   // 117 (D3)

  const BAR_LINES = [0.25, 0.5, 0.75];

  // ─── Pitch helpers ────────────────────────────────────────────────────────
  const SEMI_TO_DIAT = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6];

  function diatonicStep(keyIdx: number): number {
    const midi = 36 + keyIdx;
    const oct  = Math.floor(midi / 12) - 1;
    return oct * 7 + SEMI_TO_DIAT[midi % 12];
  }

  const E4_STEP = 30;  // treble bottom line
  const F5_STEP = 38;  // treble top line
  const G2_STEP = 18;  // bass bottom line
  const A3_STEP = 26;  // bass top line

  // Black-key semitone detection (relative to C)
  const SHARP_SEMIS = new Set([1, 3, 6, 8, 10]);
  function isSharp(keyIdx: number): boolean {
    return SHARP_SEMIS.has((36 + keyIdx) % 12);
  }

  function noteYT(keyIdx: number): number {
    return T_BOT - (diatonicStep(keyIdx) - E4_STEP) * HALF_STEP;
  }
  function noteYB(keyIdx: number): number {
    return B_BOT - (diatonicStep(keyIdx) - G2_STEP) * HALF_STEP;
  }

  // Chord layout: sort notes low→high, detect adjacent diatonic steps, assign x-offsets
  type NoteLayout = { keyIdx: number; y: number; xOff: number };
  function chordLayout(keys: number[], yFn: (k: number) => number): NoteLayout[] {
    const sorted = [...keys].sort((a, b) => a - b);
    const notes = sorted.map(k => ({ keyIdx: k, y: yFn(k), step: diatonicStep(k), xOff: 0 }));
    for (let i = 0; i < notes.length - 1; i++) {
      if (notes[i + 1].step - notes[i].step <= 1) notes[i + 1].xOff = 11;
    }
    return notes;
  }

  // Stem info: spans all noteheads, direction from chord centre vs staff middle
  function stemInfo(layout: NoteLayout[], midY: number) {
    const ys = layout.map(n => n.y);
    const top = Math.min(...ys), bot = Math.max(...ys);
    const up = (top + bot) / 2 >= midY;
    const maxXOff = Math.max(...layout.map(n => n.xOff));
    return {
      up,
      x:  up ? maxXOff + 4.5 : -4.5,
      y1: up ? bot : top,
      y2: up ? top - 30 : bot + 30,
    };
  }

  function litKey(t: number, keyIdx: number) { return Math.round(t * 10000) * 100 + keyIdx; }

  function ledgerT(keyIdx: number): number[] {
    const step = diatonicStep(keyIdx); const lines: number[] = [];
    for (let s = E4_STEP - 2; s >= step; s -= 2)
      lines.push(T_BOT + (E4_STEP - s) * HALF_STEP);
    for (let s = F5_STEP + 2; s <= step; s += 2)
      lines.push(T_TOP - (s - F5_STEP) * HALF_STEP);
    return lines;
  }
  function ledgerB(keyIdx: number): number[] {
    const step = diatonicStep(keyIdx); const lines: number[] = [];
    for (let s = G2_STEP - 2; s >= step; s -= 2)
      lines.push(B_BOT + (G2_STEP - s) * HALF_STEP);
    for (let s = A3_STEP + 2; s <= step; s += 2)
      lines.push(B_TOP - (s - A3_STEP) * HALF_STEP);
    return lines;
  }

  // ─── Reactive width & interaction ────────────────────────────────────────
  let scoreWidth = $state(800);
  function noteX(t: number): number {
    return PAD_L + t * (scoreWidth - PAD_L - PAD_R);
  }

  let barEl: SVGSVGElement | null = null;
  let wrapEl: HTMLDivElement | null = null;
  let headX    = $state(0.02);
  let dragging = $state(false);
  let lastX    = $state<number | null>(null);
  let litKeys  = $state<Set<number>>(new Set());

  function triggerBetween(x0: number, x1: number) {
    const lo = Math.min(x0, x1), hi = Math.max(x0, x1);
    for (const chord of [...RH, ...LH]) {
      if (chord.t >= lo && chord.t <= hi) {
        for (const k of chord.keys) {
          playKeyByIndex(k);
          const lk = litKey(chord.t, k);
          litKeys.add(lk);
          setTimeout(() => { litKeys = new Set([...litKeys].filter(v => v !== lk)); }, 650);
        }
      }
    }
  }

  function getRelativeX(clientX: number): number {
    if (!barEl) return 0;
    const rect = barEl.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }

  function onPointerDown(e: PointerEvent) {
    dragging = true;
    (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
    const newX = getRelativeX(e.clientX);
    triggerBetween(newX - 0.005, newX + 0.005);
    lastX = newX;
    headX = newX;
  }

  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    const newX = getRelativeX(e.clientX);
    if (lastX !== null) triggerBetween(lastX, newX);
    lastX = newX;
    headX = newX;
  }

  function onPointerUp() {
    dragging = false; lastX = null;
  }

  // ─── Scroll → scrub removed: snap scroll owns the wheel now.
  //     Scrub by dragging the playhead directly.

  let hx    = $derived(noteX(headX));
  let endX  = $derived(noteX(1) + 10);
</script>

<div class="score" bind:this={wrapEl} bind:clientWidth={scoreWidth}>
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<svg
  bind:this={barEl}
  width={scoreWidth}
  height={SCORE_H}
  viewBox="0 0 {scoreWidth} {SCORE_H}"
  role="slider"
  aria-label="Score playhead"
  aria-valuenow={Math.round(headX * 100)}
  aria-valuemin={0}
  aria-valuemax={100}
  tabindex="0"
  onpointerdown={onPointerDown}
  onpointermove={onPointerMove}
  onpointerup={onPointerUp}
  onpointercancel={onPointerUp}
>
  <!-- Parchment background -->
  <rect width={scoreWidth} height={SCORE_H} fill="url(#parchment)" />

  <defs>
    <linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#f7f0dc" />
      <stop offset="40%"  stop-color="#f2e8cc" />
      <stop offset="100%" stop-color="#ede0b8" />
    </linearGradient>
    <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>

  <!-- Top border -->
  <line x1="0" y1="0.5" x2={scoreWidth} y2="0.5" stroke="#c8a96e" stroke-width="1.5" />

  <!-- System bracket (left brace spanning both staves) -->
  <line x1={PAD_L - 14} y1={T_TOP} x2={PAD_L - 14} y2={B_BOT} stroke="#7a5c38" stroke-width="3" stroke-linecap="round" opacity="0.7" />

  <!-- ── TREBLE STAFF ── -->
  {#each Array(5) as _, i}
    <line x1={PAD_L - 6} y1={T_TOP + i * LINE_GAP} x2={scoreWidth - PAD_R} y2={T_TOP + i * LINE_GAP}
      stroke="#a0855a" stroke-width="0.9" opacity="0.8" />
  {/each}

  <!-- Treble clef -->
  <text x={PAD_L - 40} y={T_BOT + 6} font-size="68" font-family="serif"
    fill="#7a5c38" opacity="0.85" style="user-select:none">𝄞</text>

  <!-- ── BASS STAFF ── -->
  {#each Array(5) as _, i}
    <line x1={PAD_L - 6} y1={B_TOP + i * LINE_GAP} x2={scoreWidth - PAD_R} y2={B_TOP + i * LINE_GAP}
      stroke="#a0855a" stroke-width="0.9" opacity="0.8" />
  {/each}

  <!-- Bass clef -->
  <text x={PAD_L - 40} y={B_TOP + 22} font-size="36" font-family="serif"
    fill="#7a5c38" opacity="0.85" style="user-select:none">𝄢</text>

  <!-- ── BAR LINES (spanning both staves + connecting gap) ── -->
  {#each BAR_LINES as t}
    {@const x = noteX(t)}
    <line x1={x} y1={T_TOP} x2={x} y2={B_BOT} stroke="#a0855a" stroke-width="1" opacity="0.5" />
  {/each}

  <!-- Opening double bar -->
  <line x1={PAD_L - 6} y1={T_TOP} x2={PAD_L - 6} y2={B_BOT} stroke="#7a5c38" stroke-width="1.5" opacity="0.7" />

  <!-- Final double bar -->
  <line x1={endX - 3} y1={T_TOP} x2={endX - 3} y2={B_BOT} stroke="#7a5c38" stroke-width="1.2" opacity="0.7" />
  <line x1={endX + 1} y1={T_TOP} x2={endX + 1} y2={B_BOT} stroke="#7a5c38" stroke-width="3.5" opacity="0.7" />

  <!-- ── RIGHT HAND NOTES (treble) ── -->
  {#each RH as chord}
    {@const cx  = noteX(chord.t)}
    {@const lay = chordLayout(chord.keys, noteYT)}
    {@const si  = stemInfo(lay, T_MID)}
    {#each lay as n}
      {#each ledgerT(n.keyIdx) as ly}
        {@const isLit = litKeys.has(litKey(chord.t, n.keyIdx))}
        <line x1={cx + n.xOff - 9} y1={ly} x2={cx + n.xOff + 9} y2={ly}
          stroke={isLit ? '#c4a97d' : '#8b7355'} stroke-width="1.2" opacity={isLit ? 1 : 0.7} />
      {/each}
    {/each}
    <line x1={cx + si.x} y1={si.y1} x2={cx + si.x} y2={si.y2} stroke="#8b7355" stroke-width="1.3" />
    {#each lay as n}
      {@const isLit = litKeys.has(litKey(chord.t, n.keyIdx))}
      {@const col = isLit ? '#c4a97d' : '#8b7355'}
      {#if isSharp(n.keyIdx)}
        <text x={cx + n.xOff - 13} y={n.y + 4} font-size="11" font-family="serif"
          fill={col} opacity={isLit ? 1 : 0.9} style="user-select:none">♯</text>
      {/if}
      <ellipse cx={cx + n.xOff} cy={n.y} rx="5.5" ry="3.8" fill={col}
        transform="rotate(-18,{cx + n.xOff},{n.y})" filter={isLit ? 'url(#glow)' : ''} opacity={isLit ? 1 : 0.88} />
    {/each}
  {/each}

  <!-- ── LEFT HAND NOTES (bass) ── -->
  {#each LH as chord}
    {@const cx  = noteX(chord.t)}
    {@const lay = chordLayout(chord.keys, noteYB)}
    {@const si  = stemInfo(lay, B_MID)}
    {#each lay as n}
      {#each ledgerB(n.keyIdx) as ly}
        {@const isLit = litKeys.has(litKey(chord.t, n.keyIdx))}
        <line x1={cx + n.xOff - 9} y1={ly} x2={cx + n.xOff + 9} y2={ly}
          stroke={isLit ? '#c4a97d' : '#8b7355'} stroke-width="1.2" opacity={isLit ? 1 : 0.7} />
      {/each}
    {/each}
    <line x1={cx + si.x} y1={si.y1} x2={cx + si.x} y2={si.y2} stroke="#8b7355" stroke-width="1.3" />
    {#each lay as n}
      {@const isLit = litKeys.has(litKey(chord.t, n.keyIdx))}
      {@const col = isLit ? '#c4a97d' : '#8b7355'}
      {#if isSharp(n.keyIdx)}
        <text x={cx + n.xOff - 13} y={n.y + 4} font-size="11" font-family="serif"
          fill={col} opacity={isLit ? 1 : 0.9} style="user-select:none">♯</text>
      {/if}
      <ellipse cx={cx + n.xOff} cy={n.y} rx="5.5" ry="3.8" fill={col}
        transform="rotate(-18,{cx + n.xOff},{n.y})" filter={isLit ? 'url(#glow)' : ''} opacity={isLit ? 1 : 0.88} />
    {/each}
  {/each}

  <!-- ── PLAYHEAD ── -->
  <line x1={hx} y1={2} x2={hx} y2={SCORE_H}
    stroke="#8b7355" stroke-width={dragging ? 2 : 1.5} opacity={dragging ? 0.9 : 0.55} />
  <polygon
    points="{hx},{T_TOP - 10} {hx - 6},{T_TOP - 22} {hx + 6},{T_TOP - 22}"
    fill="#8b7355" opacity={dragging ? 1 : 0.7} />
</svg>
</div>

<style>
  .score {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 165px;
    cursor: ew-resize;
    user-select: none;
    touch-action: none;
    border-top: 2px solid #c8a96e66;
    box-shadow: 0 -4px 24px rgba(0,0,0,0.45);
    overflow: hidden;
  }
  svg { display: block; }
</style>
