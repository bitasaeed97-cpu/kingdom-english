import ART from "../art.js";
import CASTLES from "../data/castles.js";
import { UNIT_CONTENT } from "../data/registry.js";
import { Store } from "../state.js";
import { mascotSay } from "../mascot.js";

export function renderCastle(container, castleId, { onBack, onOpenGame }) {
  const castle = CASTLES.find((c) => c.id === castleId);
  const unit = UNIT_CONTENT[castleId];

  container.innerHTML = `
    <div class="topbar castle-header">
      <button class="icon-btn" id="btn-back">${ART.back()}</button>
      <div class="title-badge">${castle.name}</div>
      <div style="width:64px"></div>
    </div>
    <div class="castle-hero">${ART[castle.art]()}</div>
    <div class="steps-path" id="steps-path"></div>
  `;
  container.querySelector("#btn-back").addEventListener("click", onBack);

  const path = container.querySelector("#steps-path");

  if (!unit) {
    path.innerHTML = `<div style="text-align:center;font-weight:800;color:var(--purple-dark);padding-top:30px;">Coming soon! 💫</div>`;
    mascotSay("castle-soon", "This castle is still being built. Check back soon!");
    return;
  }

  // A real learning path, not a free-choice grid: step N only opens once
  // step N-1 is done, so word → sentence → conversation → reward always
  // happens in that order.
  let reachedLock = false;
  unit.steps.forEach((step, i) => {
    const done = Store.isGameComplete(castleId, step.id);
    const locked = !done && reachedLock;
    if (!done) reachedLock = true;

    const card = document.createElement("button");
    card.className = "step-card" + (locked ? " locked" : "") + (!locked && !done ? " current" : "");
    card.innerHTML = `
      <div class="step-num">${done ? ART.check() : i + 1}</div>
      <span class="step-icon">${ART[step.icon]()}</span>
      <div class="step-name">${step.name}</div>
      ${locked ? `<div class="step-lock">${ART.lock()}</div>` : ""}
    `;
    card.addEventListener("click", () => {
      if (locked) {
        mascotSay("step-locked", "Finish the step before this one first!");
        return;
      }
      onOpenGame(castleId, step.id);
    });
    path.appendChild(card);
  });

  const allDone = unit.steps.every((s) => Store.isGameComplete(castleId, s.id));
  if (allDone && castle.unlocksNext && !Store.isCastleUnlocked(castle.unlocksNext)) {
    Store.unlockCastle(castle.unlocksNext);
  }
}
