/**
 * Synthetic marimba tone via Web Audio API.
 * Real recordings can replace this later — just swap playMarimbaNote().
 *
 * Marimba character:
 *  - Fundamental sine + 4th partial (2 octaves up, softer) for the "woody" body
 *  - Fast attack, medium-short exponential decay (~1.2 s)
 *  - Slight pitch wobble (+soft vibrato) simulates the resonator tube ring
 */

let _ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!_ctx) _ctx = new AudioContext();
  // Resume if suspended (browser autoplay policy)
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}

/** Chromatic index 0 = C2 (MIDI 36) … 60 = C7 (MIDI 96) */
export function playMarimbaNote(idx: number): void {
  const ctx = getCtx();
  const midi = 36 + idx;
  const freq = 440 * Math.pow(2, (midi - 69) / 12);

  const now = ctx.currentTime;
  const decay = 1.4 - idx * 0.007; // higher keys decay slightly faster

  // ─── Master gain (envelope) ────────────────────────────────────────────────
  const env = ctx.createGain();
  env.gain.setValueAtTime(0.001, now);
  env.gain.linearRampToValueAtTime(0.55, now + 0.004); // fast mallet attack
  env.gain.exponentialRampToValueAtTime(0.001, now + decay);
  env.connect(ctx.destination);

  // ─── Fundamental ──────────────────────────────────────────────────────────
  const osc1 = ctx.createOscillator();
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(freq, now);
  // Tiny pitch drop at attack — real marimba bars flex slightly on impact
  osc1.frequency.setValueAtTime(freq * 1.003, now);
  osc1.frequency.exponentialRampToValueAtTime(freq, now + 0.02);

  const g1 = ctx.createGain();
  g1.gain.value = 1.0;
  osc1.connect(g1);
  g1.connect(env);

  // ─── 4th partial (2 octaves up) — characteristic woody marimba overtone ───
  const osc2 = ctx.createOscillator();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(freq * 4, now);

  const g2 = ctx.createGain();
  g2.gain.value = 0.12;
  osc2.connect(g2);
  g2.connect(env);

  // ─── Soft noise burst (mallet thump) — very short ─────────────────────────
  const bufferSize = ctx.sampleRate * 0.04;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const noiseEnv = ctx.createGain();
  noiseEnv.gain.setValueAtTime(0.08, now);
  noiseEnv.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
  noise.connect(noiseEnv);
  noiseEnv.connect(ctx.destination);

  // ─── Start & auto-stop ────────────────────────────────────────────────────
  osc1.start(now);
  osc1.stop(now + decay + 0.05);
  osc2.start(now);
  osc2.stop(now + decay + 0.05);
  noise.start(now);
}
