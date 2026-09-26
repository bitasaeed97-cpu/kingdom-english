import ART from "../art.js";
import { Fx } from "../effects.js";
import { Sfx } from "../audio.js";
import { mascotSay } from "../mascot.js";

const PRAISE = [
  "Amazing job!",
  "You did it!",
  "Wonderful!",
  "You're a star!",
  "Fantastic work!",
];

export function renderReward(container, { jewel, isReplay = false, onContinue }) {
  const praise = PRAISE[(Math.random() * PRAISE.length) | 0];
  const icon = isReplay ? ART.sparkleStar() : ART.gem(jewel.color[0], jewel.color[1]);
  const sub = isReplay ? "Great practice! ✨" : "You found a magic jewel! ✨";
  container.innerHTML = `
    <div class="reward-content">
      <div class="reward-jewel">${icon}</div>
      <div class="reward-title">${praise}</div>
      <div class="reward-sub">${sub}</div>
      <button class="btn-round gold" id="btn-continue">Continue</button>
    </div>
  `;
  container.querySelector("#btn-continue").addEventListener("click", onContinue);

  Sfx.unlock();
  setTimeout(() => Fx.confettiBurst(), 150);
  mascotSay("reward-praise", isReplay ? `${praise} Great practice!` : `${praise} You earned a jewel!`);
}
