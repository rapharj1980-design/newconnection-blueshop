/**
 * Feedback sonoro de UI sintetizado com Web Audio API.
 * - Sem arquivos de áudio (tudo gerado por osciladores).
 * - AudioContext criado apenas no primeiro gesto do usuário.
 * - Estado de mudo persistido em localStorage.
 */

export type SoundName = "pop" | "tap" | "chime";

const STORAGE_KEY = "nc-sound-muted";
const MASTER_VOLUME = 0.2; // 20% — sutil

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;

const listeners = new Set<(muted: boolean) => void>();

export function isMuted() {
  return muted;
}

export function subscribeMuted(fn: (muted: boolean) => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function loadMutedFromStorage() {
  if (typeof window === "undefined") return false;
  muted = window.localStorage.getItem(STORAGE_KEY) === "1";
  listeners.forEach((l) => l(muted));
  return muted;
}

export function setMuted(value: boolean) {
  muted = value;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
  }
  listeners.forEach((l) => l(muted));
}

export function toggleMuted() {
  setMuted(!muted);
  if (!muted) playSound("tap");
  return muted;
}

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = MASTER_VOLUME;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

type ToneOptions = {
  freq: number;
  type?: OscillatorType;
  duration?: number;
  gain?: number;
  delay?: number;
  glideTo?: number;
};

function tone(audio: AudioContext, out: GainNode, o: ToneOptions) {
  const { freq, type = "sine", duration = 0.12, gain = 1, delay = 0, glideTo } = o;
  const t0 = audio.currentTime + delay;
  const osc = audio.createOscillator();
  const env = audio.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + duration);

  // Envelope rápido: ataque curtíssimo + decaimento suave
  env.gain.setValueAtTime(0.0001, t0);
  env.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
  env.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

  osc.connect(env);
  env.connect(out);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

/** Toca um dos perfis de som da interface. Silencioso se estiver mutado. */
export function playSound(name: SoundName) {
  if (muted) return;
  const audio = getContext();
  if (!audio || !master) return;

  // Filtro suaviza qualquer aspereza dos harmônicos
  const filter = audio.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 4200;
  filter.connect(master);

  switch (name) {
    // Ação principal: "soft pop / snap" (encaixe de conector)
    case "pop":
      tone(audio, filter, { freq: 320, glideTo: 180, type: "sine", duration: 0.11, gain: 0.9 });
      tone(audio, filter, { freq: 640, type: "triangle", duration: 0.06, gain: 0.22, delay: 0.005 });
      break;

    // Filtros / abas: tom harmônico curto estilo marimba
    case "tap":
      tone(audio, filter, { freq: 660, type: "sine", duration: 0.1, gain: 0.6 });
      tone(audio, filter, { freq: 1320, type: "sine", duration: 0.07, gain: 0.14, delay: 0.004 });
      break;

    // Carrinho: chime cristalino
    case "chime":
      tone(audio, filter, { freq: 1046.5, type: "sine", duration: 0.12, gain: 0.5 });
      tone(audio, filter, { freq: 1568, type: "sine", duration: 0.16, gain: 0.3, delay: 0.05 });
      break;

  }
}
