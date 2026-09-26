import ART from "./art.js";
import { Narrator } from "./audio.js";

let wrapEl, bubbleEl, fairyEl;
let bubbleTimer = null;

export function initMascot() {
  wrapEl = document.getElementById("mascot-wrap");
  bubbleEl = document.getElementById("mascot-bubble");
  wrapEl.insertAdjacentHTML(
    "afterbegin",
    `<div class="mascot-fairy" id="mascot-fairy">${ART.mascotFairy()}</div>`
  );
  fairyEl = document.getElementById("mascot-fairy");

  Narrator.onTalking((on) => {
    fairyEl.classList.toggle("talking", on);
  });

  fairyEl.addEventListener("click", () => {
    Narrator.unlockAudioContext();
  });
}

export function mascotSay(lineId, text, { showBubble = true, bubbleText, onEnd } = {}) {
  if (showBubble) {
    const shown = bubbleText ?? text;
    bubbleEl.textContent = shown;
    bubbleEl.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubbleEl.classList.remove("show"), Math.max(2600, shown.length * 90));
  }
  Narrator.say(lineId, text, { onEnd });
}

export function hideBubble() {
  bubbleEl.classList.remove("show");
}
