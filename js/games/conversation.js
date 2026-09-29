import ART from "../art.js";
import { Fx } from "../effects.js";
import { Sfx } from "../audio.js";
import { mascotSay } from "../mascot.js";

const MAX_RECORD_MS = 6000;

// Real back-and-forth practice: the mascot asks a question, she taps the mic
// and says her answer out loud, then hears her own voice played back. No
// speech grading — Web Speech recognition for a 3-5yo isn't reliable enough
// to judge, so the only "correct" outcome here is that she spoke up at all.
export function renderConversation(stage, { unit, game, setProgress, onComplete }) {
  const exchange = game.exchange;
  let recorder = null;
  let stream = null;
  let audioURL = null;
  let autoStopTimer = null;

  setProgress(0, 1);
  render("ask");
  mascotSay("convo-question-" + game.id, exchange.question, { repeat: true, onEnd: () => render("ready") });

  function render(state) {
    const sceneArt = exchange.art ? ART[exchange.art]() : "";
    stage.innerHTML = `
      <div class="convo-scene">${sceneArt}</div>
      ${state === "ask" || state === "ready" ? `
        <button class="mic-btn" id="btn-mic">${ART.iconMic()}</button>
        <div class="convo-hint">${state === "ask" ? "Listen..." : "🎤 Tap and tell me!"}</div>
      ` : ""}
      ${state === "recording" ? `
        <button class="mic-btn recording" id="btn-stop">${ART.iconMic()}</button>
        <div class="convo-hint">I'm listening... tap when you're done!</div>
      ` : ""}
      ${state === "recorded" ? `
        <div class="convo-row">
          <button class="play-btn" id="btn-play">${ART.iconPlay()}</button>
          <button class="mic-btn" id="btn-retry">${ART.iconMic()}</button>
        </div>
        <div class="convo-hint">Tap ▶️ to hear yourself, or 🎤 to try again!</div>
      ` : ""}
      ${state === "no-mic" ? `
        <div class="convo-hint">That's okay — just say it out loud to me! 🐸</div>
        <button class="btn-round mint" id="btn-continue-nomic">I said it!</button>
      ` : ""}
    `;

    if (state === "ready" || state === "ask") {
      stage.querySelector("#btn-mic")?.addEventListener("click", startRecording);
    }
    if (state === "recording") {
      stage.querySelector("#btn-stop").addEventListener("click", stopRecording);
    }
    if (state === "recorded") {
      stage.querySelector("#btn-play").addEventListener("click", playback);
      stage.querySelector("#btn-retry").addEventListener("click", startRecording);
    }
    if (state === "no-mic") {
      stage.querySelector("#btn-continue-nomic").addEventListener("click", finish);
    }
  }

  async function startRecording() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      render("no-mic");
      return;
    }
    try {
      recorder = new MediaRecorder(stream);
    } catch {
      stream.getTracks().forEach((t) => t.stop());
      render("no-mic");
      return;
    }
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      if (audioURL) URL.revokeObjectURL(audioURL);
      audioURL = URL.createObjectURL(blob);
      stream.getTracks().forEach((t) => t.stop());
      render("recorded");
    };
    recorder.start();
    Sfx.tap();
    render("recording");
    autoStopTimer = setTimeout(stopRecording, MAX_RECORD_MS);
  }

  function stopRecording() {
    clearTimeout(autoStopTimer);
    if (recorder && recorder.state === "recording") recorder.stop();
  }

  let hasPlayedBack = false;
  function playback() {
    if (!audioURL) return;
    const audio = new Audio(audioURL);
    audio.play().catch(() => {});
    if (!hasPlayedBack) {
      hasPlayedBack = true;
      audio.onended = finish;
    }
  }

  function finish() {
    setProgress(1, 1);
    Sfx.correct();
    Fx.confettiBurst();
    mascotSay("convo-praise-" + game.id, "You did it! I love talking with you!");
    setTimeout(onComplete, 2200);
  }
}
