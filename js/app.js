import { initMascot, mascotSay } from "./mascot.js";
import { renderMap } from "./screens/mapScreen.js";
import { renderCastle } from "./screens/castleScreen.js";
import { renderGame } from "./screens/gameScreen.js";
import { renderReward } from "./screens/rewardScreen.js";
import { renderTreasure } from "./screens/treasureScreen.js";
import { Store } from "./state.js";
import { Narrator } from "./audio.js";

const screens = {
  map: document.getElementById("screen-map"),
  castle: document.getElementById("screen-castle"),
  game: document.getElementById("screen-game"),
  reward: document.getElementById("screen-reward"),
  treasure: document.getElementById("screen-treasure"),
};

const JEWEL_COLORS = [
  ["#ff8fd6", "#b47cff"],
  ["#ffc857", "#ff8fd6"],
  ["#7fe0c4", "#8fd3ff"],
  ["#8fd3ff", "#b47cff"],
  ["#ffc857", "#7fe0c4"],
];

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("active", key === name));
}

function goMap() {
  renderMap(screens.map, { onOpenCastle: goCastle, onOpenTreasure: goTreasure });
  showScreen("map");
}

function goCastle(castleId) {
  renderCastle(screens.castle, castleId, { onBack: goMap, onOpenGame: goGame });
  showScreen("castle");
}

function goGame(castleId, gameId) {
  renderGame(screens.game, castleId, gameId, {
    onBack: () => goCastle(castleId),
    onComplete: (cId, gId) => {
      Narrator.cancel();
      const alreadyDone = Store.isGameComplete(cId, gId);
      Store.completeGame(cId, gId);
      if (!alreadyDone) {
        const color = JEWEL_COLORS[Store.jewels().length % JEWEL_COLORS.length];
        const jewel = { id: `${cId}-${gId}-${Date.now()}`, castleId: cId, color };
        Store.addJewel(jewel);
        goReward(cId, jewel, false);
      } else {
        // Replaying an already-finished game still needs a payoff — she
        // shouldn't get dumped back to the castle screen with no reaction.
        goReward(cId, null, true);
      }
    },
  });
  showScreen("game");
}

function goReward(castleId, jewel, isReplay) {
  renderReward(screens.reward, { jewel, isReplay, onContinue: () => goCastle(castleId) });
  showScreen("reward");
}

function goTreasure() {
  renderTreasure(screens.treasure, { onBack: goMap });
  showScreen("treasure");
}

function boot() {
  initMascot();
  goMap();
  setTimeout(() => {
    mascotSay("welcome", "Welcome to the Magic Kingdom! Let's learn English together!");
  }, 500);

  document.body.addEventListener(
    "pointerdown",
    () => Narrator.unlockAudioContext(),
    { once: true }
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
