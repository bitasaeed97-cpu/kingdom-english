import ART from "../art.js";
import { UNIT_CONTENT } from "../data/registry.js";
import { renderListenAndFind } from "../games/listenAndFind.js";
import { renderListenAndOrder } from "../games/listenAndOrder.js";
import { renderJigsaw } from "../games/jigsawPuzzle.js";

const ENGINES = {
  "listen-and-find": renderListenAndFind,
  "listen-and-order": renderListenAndOrder,
  jigsaw: renderJigsaw,
};

export function renderGame(container, castleId, gameId, { onBack, onComplete }) {
  const unit = UNIT_CONTENT[castleId];
  const game = unit.games.find((g) => g.id === gameId);

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
  const engine = ENGINES[game.type];
  engine(stage, { unit, game, setProgress, onComplete: () => onComplete(castleId, gameId) });
}
