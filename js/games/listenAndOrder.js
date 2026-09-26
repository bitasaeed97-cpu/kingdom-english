import ART from "../art.js";
import { shuffle } from "../utils.js";
import { Sfx } from "../audio.js";
import { Fx } from "../effects.js";
import { mascotSay } from "../mascot.js";
import { makeDraggable } from "../drag.js";

export function renderListenAndOrder(stage, { unit, game, setProgress, onComplete }) {
  const steps = game.steps;
  let filledCount = 0;

  stage.innerHTML = `
    <div class="order-slots" id="slots"></div>
    <button class="replay-btn" id="btn-replay">${ART.speaker()}</button>
    <div class="order-tray" id="tray"></div>
  `;

  const slotsEl = stage.querySelector("#slots");
  const trayEl = stage.querySelector("#tray");

  steps.forEach((_, i) => {
    const slot = document.createElement("div");
    slot.className = "order-slot";
    slot.dataset.index = i;
    slot.textContent = i + 1;
    slotsEl.appendChild(slot);
  });

  const shuffled = shuffle(steps.map((s, i) => ({ ...s, stepIndex: i })));
  shuffled.forEach((step) => {
    const card = document.createElement("div");
    card.className = "order-card";
    card.dataset.stepIndex = step.stepIndex;
    card.innerHTML = ART[unit.vocab[step.key].art]();
    trayEl.appendChild(card);
    wireDrag(card, step);
  });

  stage.querySelector("#btn-replay").addEventListener("click", playStory);
  setProgress(0, steps.length);
  mascotSay("order-intro-" + game.id, game.intro, { onEnd: playStory });

  function playStory() {
    mascotSay("order-story-" + game.id, game.storyLine, { bubbleText: "🎧 Listen to the story..." });
  }

  function wireDrag(card, step) {
    makeDraggable(card, {
      canDrag: () => !card.classList.contains("placed"),
      onDrop: (target, restore) => {
        const slot = target?.closest(".order-slot");
        handleDrop(card, step, slot, restore);
      },
    });
  }

  function handleDrop(card, step, slot, restore) {
    if (!slot || slot.classList.contains("filled")) {
      restore();
      return;
    }
    const slotIndex = Number(slot.dataset.index);
    if (slotIndex !== step.stepIndex) {
      restore();
      Sfx.wrong();
      slot.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }],
        { duration: 300 }
      );
      return;
    }
    restore();
    Sfx.correct();
    slot.classList.add("filled");
    slot.innerHTML = ART[unit.vocab[step.key].art]();
    card.classList.add("placed");
    filledCount++;
    setProgress(filledCount, steps.length);
    const r = slot.getBoundingClientRect();
    Fx.sparkleAt(r.left + r.width / 2, r.top + r.height / 2);
    mascotSay("order-step-" + step.key, step.text, { repeat: true });

    if (filledCount >= steps.length) {
      setTimeout(() => {
        mascotSay("order-complete-" + game.id, "You told the whole story!");
        setTimeout(onComplete, 1600);
      }, 500);
    }
  }
}
