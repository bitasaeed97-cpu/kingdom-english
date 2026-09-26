import ART from "../art.js";
import { Store } from "../state.js";
import { mascotSay } from "../mascot.js";

export function renderTreasure(container, { onBack }) {
  const jewels = Store.jewels();
  container.innerHTML = `
    <div class="topbar">
      <button class="icon-btn" id="btn-back">${ART.back()}</button>
      <div class="title-badge">💎 My Treasure</div>
      <div style="width:64px"></div>
    </div>
    <div class="treasure-grid" id="treasure-grid"></div>
  `;
  container.querySelector("#btn-back").addEventListener("click", onBack);

  const grid = container.querySelector("#treasure-grid");
  const slots = Math.max(jewels.length, 8);
  for (let i = 0; i < slots; i++) {
    const slot = document.createElement("div");
    const j = jewels[i];
    slot.className = "treasure-slot" + (j ? "" : " empty");
    slot.innerHTML = j ? ART.gem(j.color[0], j.color[1]) : ART.crown();
    grid.appendChild(slot);
  }

  if (jewels.length === 0) {
    mascotSay("treasure-empty", "Play games to collect magic jewels for your treasure!");
  }
}
