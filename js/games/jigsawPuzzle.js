import ART from "../art.js";
import { shuffle } from "../utils.js";
import { Sfx } from "../audio.js";
import { Fx } from "../effects.js";
import { mascotSay } from "../mascot.js";

export function renderJigsaw(stage, { game, setProgress, onComplete }) {
  const grid = game.grid;
  const boardSize = Math.min(340, window.innerWidth * 0.72);
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

  const pieces = [];
  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      const slot = document.createElement("div");
      slot.className = "jigsaw-slot";
      slot.style.left = c * cell + "px";
      slot.style.top = r * cell + "px";
      slot.style.width = cell + "px";
      slot.style.height = cell + "px";
      slot.dataset.r = r;
      slot.dataset.c = c;
      board.appendChild(slot);
      pieces.push({ r, c });
    }
  }

  shuffle(pieces).forEach(({ r, c }) => {
    const piece = document.createElement("div");
    piece.className = "jigsaw-piece-tray";
    piece.style.backgroundImage = `url('${dataUri}')`;
    piece.style.backgroundSize = `${boardSize}px ${boardSize}px`;
    piece.style.backgroundPosition = `-${c * cell}px -${r * cell}px`;
    piece.dataset.r = r;
    piece.dataset.c = c;
    tray.appendChild(piece);
    wireDrag(piece, r, c);
  });

  setProgress(0, total);
  stage.querySelector("#btn-replay").addEventListener("click", () => mascotSay("jigsaw-intro", game.intro));
  mascotSay("jigsaw-intro", game.intro);

  function wireDrag(piece, r, c) {
    let ghost = null;

    piece.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const rect = piece.getBoundingClientRect();
      const startX = rect.left;
      const startY = rect.top;
      ghost = piece.cloneNode(true);
      ghost.style.position = "fixed";
      ghost.style.left = startX + "px";
      ghost.style.top = startY + "px";
      ghost.style.width = rect.width + "px";
      ghost.style.height = rect.height + "px";
      ghost.style.zIndex = "200";
      ghost.style.pointerEvents = "none";
      ghost.style.transform = "scale(1.1)";
      document.body.appendChild(ghost);
      piece.style.visibility = "hidden";

      const onMove = (ev) => {
        ghost.style.left = startX + (ev.clientX - e.clientX) + "px";
        ghost.style.top = startY + (ev.clientY - e.clientY) + "px";
      };
      const onUp = (ev) => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerup", onUp);
        const target = document.elementFromPoint(ev.clientX, ev.clientY);
        const slot = target?.closest(".jigsaw-slot");
        ghost.remove();
        ghost = null;
        handleDrop(piece, r, c, slot);
      };
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
    });
  }

  function handleDrop(piece, r, c, slot) {
    if (!slot || slot.classList.contains("filled") || Number(slot.dataset.r) !== r || Number(slot.dataset.c) !== c) {
      piece.style.visibility = "visible";
      if (slot) {
        Sfx.wrong();
      }
      return;
    }
    slot.classList.add("filled");
    slot.style.backgroundImage = `url('${dataUri}')`;
    slot.style.backgroundSize = `${boardSize}px ${boardSize}px`;
    slot.style.backgroundPosition = `-${c * cell}px -${r * cell}px`;
    slot.style.border = "none";
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
