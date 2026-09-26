// Narration + sound effects.
// Narration lines are looked up by id in AUDIO_FILES first (for real recorded
// audio, dropped in later as e.g. "assets/audio/daily-routine/wake-up.mp3").
// Anything missing there falls back to browser text-to-speech, so the app is
// fully playable today and can be upgraded to real voice recordings later
// without touching any game code.

const AUDIO_FILES = {
  // "wake-up-intro": "assets/audio/daily-routine/wake-up-intro.mp3",
};

let unlocked = false;
let englishVoice = null;
let talkingListeners = [];

function pickVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  englishVoice =
    voices.find((v) => /en-US/i.test(v.lang) && /google us english/i.test(v.name)) ||
    voices.find((v) => /en-US/i.test(v.lang) && /female|samantha|zira|susan/i.test(v.name)) ||
    voices.find((v) => /en-US/i.test(v.lang)) ||
    voices.find((v) => /^en/i.test(v.lang)) ||
    voices[0] ||
    null;
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  pickVoice();
  window.speechSynthesis.onvoiceschanged = pickVoice;
}

function setTalking(on) {
  talkingListeners.forEach((fn) => fn(on));
}

function makeUtterance(text, rate, pitch) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate;
  utter.pitch = pitch;
  if (englishVoice) utter.voice = englishVoice;
  return utter;
}

// Slow and clear by default — she's a 3-5yo hearing English as a second
// language, not a fluent adult listener. `repeat: true` says the phrase
// twice with a short pause, which helps new vocabulary actually land instead
// of washing past on a single quick pass.
function speak(text, { rate = 0.68, pitch = 1.15, repeat = false, onEnd } = {}) {
  if (!("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const first = makeUtterance(text, rate, pitch);
  first.onstart = () => setTalking(true);
  if (repeat) {
    const second = makeUtterance(text, rate, pitch);
    second.onend = () => {
      setTalking(false);
      onEnd?.();
    };
    second.onerror = () => {
      setTalking(false);
      onEnd?.();
    };
    first.onend = () => {
      setTalking(false);
      setTimeout(() => {
        setTalking(true);
        window.speechSynthesis.speak(second);
      }, 500);
    };
    first.onerror = first.onend;
  } else {
    first.onend = () => {
      setTalking(false);
      onEnd?.();
    };
    first.onerror = () => {
      setTalking(false);
      onEnd?.();
    };
  }
  window.speechSynthesis.speak(first);
}

function playFile(src, { onEnd } = {}) {
  const audio = new Audio(src);
  setTalking(true);
  audio.onended = () => {
    setTalking(false);
    onEnd?.();
  };
  audio.onerror = () => {
    setTalking(false);
    onEnd?.();
  };
  audio.play().catch(() => {
    setTalking(false);
    onEnd?.();
  });
}

// ---- WebAudio synthesized sound effects (no files needed) ----
let actx = null;
function ctx() {
  if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  return actx;
}

function tone(freq, start, dur, type = "sine", gainPeak = 0.18) {
  const c = ctx();
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, c.currentTime + start);
  gain.gain.linearRampToValueAtTime(gainPeak, c.currentTime + start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + start + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(c.currentTime + start);
  osc.stop(c.currentTime + start + dur + 0.05);
}

export const Sfx = {
  correct() {
    tone(523.25, 0, 0.14);
    tone(659.25, 0.1, 0.14);
    tone(783.99, 0.2, 0.22);
  },
  wrong() {
    tone(220, 0, 0.18, "sawtooth", 0.1);
    tone(180, 0.12, 0.22, "sawtooth", 0.09);
  },
  tap() {
    tone(880, 0, 0.06, "sine", 0.08);
  },
  sparkle() {
    [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, i * 0.06, 0.15, "triangle", 0.07));
  },
  unlock() {
    [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.09, 0.3, "sine", 0.15));
  },
};

export const Narrator = {
  onTalking(fn) {
    talkingListeners.push(fn);
  },
  say(lineId, text, opts = {}) {
    const file = AUDIO_FILES[lineId];
    if (file) playFile(file, opts);
    else speak(text, opts);
  },
  cancel() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setTalking(false);
  },
  unlockAudioContext() {
    if (unlocked) return;
    unlocked = true;
    try {
      ctx().resume();
    } catch {
      /* ignore */
    }
  },
};
