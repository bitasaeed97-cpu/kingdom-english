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

export function renderReward(container, { jewel, onContinue }) {
  const praise = PRAISE[(Math.random() * PRAISE.length) | 0];
  container.innerHTML = `
    <div class="reward-content">
      <div class="reward-jewel">${ART.gem(jewel.color[0], jewel.color[1])}</div>
      <div class="reward-title">${praise}</div>
      <div class="reward-sub">You found a magic jewel! ✨</div>
      <button class="btn-round gold" id="btn-continue">Continue</button>
    </div>
  `;
  container.querySelector("#btn-continue").addEventListener("click", onContinue);

  Sfx.unlock();
  setTimeout(() => Fx.confettiBurst(), 150);
  mascotSay("reward-praise", `${praise} You earned a jewel!`);
}
