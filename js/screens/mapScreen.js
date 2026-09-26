import ART from "../art.js";
import CASTLES from "../data/castles.js";
import { UNIT_CONTENT } from "../data/registry.js";
import { Store } from "../state.js";
import { mascotSay } from "../mascot.js";

export function renderMap(container, { onOpenCastle, onOpenTreasure }) {
  container.innerHTML = `
    <div class="topbar map-header">
      <div class="title-badge">✨ Magic Kingdom</div>
      <button class="icon-btn" id="btn-treasure">${ART.gem("#ffc857", "#ff8fd6")}</button>
    </div>
    <div class="map-scroll">
      <div class="map-path" id="map-path">
        <svg class="path-line" id="path-line"></svg>
      </div>
    </div>
  `;

  const pathEl = container.querySelector("#map-path");
  const nodes = [];

  CASTLES.forEach((castle) => {
    const unlocked = Store.isCastleUnlocked(castle.id);
    const unit = UNIT_CONTENT[castle.id];
    const total = unit ? unit.games.length : 0;
    const progress = unlocked && unit ? Store.castleProgress(castle.id, total) : { done: 0, total };
    const starsEarned = total ? Math.round((progress.done / total) * 3) : 0;

    const node = document.createElement("div");
    node.className = "castle-node" + (unlocked ? "" : " locked");
    node.style.left = castle.x + "%";
    node.style.top = castle.y + "%";
    node.innerHTML = `
      <div class="castle-btn">
        ${ART[castle.art]()}
        ${unlocked ? "" : `<div class="lock-badge">${ART.lock()}</div>`}
      </div>
      <div class="castle-label">${castle.name}</div>
      ${unlocked && total ? `<div class="stars-row">${[0, 1, 2].map((i) => ART.star(i < starsEarned)).join("")}</div>` : ""}
    `;
    node.addEventListener("click", () => {
      if (unlocked) onOpenCastle(castle.id);
      else mascotSay("locked-castle", `Finish the castle before this one to unlock ${castle.name}!`);
    });
    pathEl.appendChild(node);
    nodes.push({ castle, node });
  });

  requestAnimationFrame(() => drawPath(pathEl, nodes));

  container.querySelector("#btn-treasure").addEventListener("click", onOpenTreasure);
}

function drawPath(pathEl, nodes) {
  const svg = pathEl.querySelector("#path-line");
  const rect = pathEl.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  const pts = nodes.map(({ node }) => {
    const r = node.getBoundingClientRect();
    return {
      x: r.left - rect.left + r.width / 2,
      y: r.top - rect.top + 54,
    };
  });
  if (pts.length < 2) return;
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const cur = pts[i];
    const midY = (prev.y + cur.y) / 2;
    d += ` C ${prev.x} ${midY}, ${cur.x} ${midY}, ${cur.x} ${cur.y}`;
  }
  svg.innerHTML = `<path d="${d}" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="2 26" opacity="0.85"/>`;
}
