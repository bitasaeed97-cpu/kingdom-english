import ART from "../art.js";
import { UNIT_CONTENT } from "../data/registry.js";
import { renderWordLearn } from "../games/wordLearn.js";
import { renderWordPractice } from "../games/wordPractice.js";
import { renderListenAndOrder } from "../games/listenAndOrder.js";
import { renderConversation } from "../games/conversation.js";
import { renderJigsaw } from "../games/jigsawPuzzle.js";

const ENGINES = {
  "word-learn": renderWordLearn,
  "word-practice": renderWordPractice,
  "sentence-build": renderListenAndOrder,
  conversation: renderConversation,
  puzzle: renderJigsaw,
};

export function renderGame(container, castleId, stepId, { onBack, onComplete }) {
  const unit = UNIT_CONTENT[castleId];
  const step = unit.steps.find((s) => s.id === stepId);

  container.innerHTML = `
    <div class="topbar game-topbar">
      <button class="icon-btn" id="btn-back">${ART.back()}</button>
      <div class="progress-pills" id="progress-pills"></div>
      <div style="width:64px"></div>
    </div>
    <div class="game-stage" id="game-stage"></div>
  `;
  container.querySelector("#btn-back").addEventListener("click", onBack);

  const pillsEl = container.querySelector("#progress-pills");
  const setProgress = (current, total) => {
    pillsEl.innerHTML = Array.from(
      { length: total },
      (_, i) => `<div class="progress-pill ${i < current ? "filled" : ""}"></div>`
    ).join("");
  };

  const stage = container.querySelector("#game-stage");
  const engine = ENGINES[step.type];
  engine(stage, { unit, game: step, setProgress, onComplete: () => onComplete(castleId, stepId) });
}
