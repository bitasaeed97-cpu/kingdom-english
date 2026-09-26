import ART from "../art.js";
import { shuffle } from "../utils.js";
import { Sfx } from "../audio.js";
import { Fx } from "../effects.js";
import { mascotSay } from "../mascot.js";
import { makeDraggable } from "../drag.js";

export function renderJigsaw(stage, { game, setProgress, onComplete }) {
  const grid = game.grid;
  const boardSize = Math.min(320, window.innerWidth * 0.7);
  const cell = boardSize / grid;
  const svg = ART[game.image]();
  const dataUri = "data:image/svg+xml," + encodeURIComponent(svg);
  let placed = 0;
  const total = grid * grid;

  stage.innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;">
      <div class="jigsaw-preview" style="background-image:url('${dataUri}')"></div>
      <button class="replay-btn" id="btn-replay">${ART.speaker()}</button>
    </div>
    <div class="jigsaw-board" id="board" style="width:${boardSize}px;height:${boardSize}px;"></div>
    <div class="jigsaw-tray" id="tray"></div>
  `;

  const board = stage.querySelector("#board");
  const tray = stage.querySelector("#tray");

  // Numbered badges give her an actual matching strategy (find "3", find
  // slot "3") instead of blind trial and error — flat-colored regions of
  // the picture (sky, background) look nearly identical piece to piece.
  const pieces = [];
  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      const num = r * grid + c + 1;
      const slot = document.createElement("div");
      slot.className = "jigsaw-slot";
      slot.style.left = c * cell + "px";
      slot.style.top = r * cell + "px";
      slot.style.width = cell + "px";
      slot.style.height = cell + "px";
      slot.dataset.r = r;
      slot.dataset.c = c;
      slot.innerHTML = `<span class="jigsaw-badge">${num}</span>`;
      board.appendChild(slot);
      pieces.push({ r, c, num });
    }
  }

  shuffle(pieces).forEach(({ r, c, num }) => {
    const piece = document.createElement("div");
    piece.className = "jigsaw-piece-tray";
    piece.style.backgroundImage = `url('${dataUri}')`;
    piece.style.backgroundSize = `${boardSize}px ${boardSize}px`;
    piece.style.backgroundPosition = `-${c * cell}px -${r * cell}px`;
    piece.dataset.r = r;
    piece.dataset.c = c;
    piece.innerHTML = `<span class="jigsaw-badge">${num}</span>`;
    tray.appendChild(piece);
    wireDrag(piece, r, c);
  });

  setProgress(0, total);
  stage.querySelector("#btn-replay").addEventListener("click", () => mascotSay("jigsaw-intro", game.intro));
  mascotSay("jigsaw-intro", game.intro);

  function wireDrag(piece, r, c) {
    makeDraggable(piece, {
      canDrag: () => piece.isConnected,
      onDrop: (target, restore) => {
        const slot = target?.closest(".jigsaw-slot");
        handleDrop(piece, r, c, slot, restore);
      },
    });
  }

  function handleDrop(piece, r, c, slot, restore) {
    if (!slot || slot.classList.contains("filled") || Number(slot.dataset.r) !== r || Number(slot.dataset.c) !== c) {
      restore();
      if (slot) Sfx.wrong();
      return;
    }
    slot.classList.add("filled");
    slot.style.backgroundImage = `url('${dataUri}')`;
    slot.style.backgroundSize = `${boardSize}px ${boardSize}px`;
    slot.style.backgroundPosition = `-${c * cell}px -${r * cell}px`;
    slot.style.border = "none";
    slot.innerHTML = "";
    piece.remove();
    placed++;
    setProgress(placed, total);
    Sfx.correct();
    const r2 = slot.getBoundingClientRect();
    Fx.sparkleAt(r2.left + r2.width / 2, r2.top + r2.height / 2);

    if (placed >= total) {
      setTimeout(() => {
        Fx.confettiBurst();
        mascotSay("jigsaw-complete", "You finished the puzzle! Beautiful!");
        setTimeout(onComplete, 1800);
      }, 400);
    }
  }
}
