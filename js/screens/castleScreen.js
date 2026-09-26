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
    <div class="games-grid" id="games-grid"></div>
  `;
  container.querySelector("#btn-back").addEventListener("click", onBack);

  const grid = container.querySelector("#games-grid");

  if (!unit) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;font-weight:800;color:var(--purple-dark);padding-top:30px;">Coming soon! 💫</div>`;
    mascotSay("castle-soon", "This castle is still being built. Check back soon!");
    return;
  }

  unit.games.forEach((game) => {
    const done = Store.isGameComplete(castleId, game.id);
    const requires = game.requires || [];
    const lockedByRequirement = requires.some((req) => !Store.isGameComplete(castleId, req));

    const card = document.createElement("button");
    card.className = "game-card" + (lockedByRequirement ? " locked" : "");
    card.innerHTML = `
      ${done ? `<div class="done-check">${ART.check()}</div>` : ""}
      <span class="game-icon">${ART[game.icon]()}</span>
      <div class="game-name">${game.name}</div>
      ${lockedByRequirement ? `<div style="position:absolute;top:8px;left:8px;width:22px;height:22px;">${ART.lock()}</div>` : ""}
    `;
    card.addEventListener("click", () => {
      if (lockedByRequirement) {
        mascotSay("game-locked", "Finish the other games first!");
        return;
      }
      onOpenGame(castleId, game.id);
    });
    grid.appendChild(card);
  });

  // unlock the next castle once every game here is complete
  const allDone = unit.games.every((g) => Store.isGameComplete(castleId, g.id));
  if (allDone && castle.unlocksNext && !Store.isCastleUnlocked(castle.unlocksNext)) {
    Store.unlockCastle(castle.unlocksNext);
  }
}
