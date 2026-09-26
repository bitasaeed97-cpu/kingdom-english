const KEY = "kingdom-english-progress-v1";

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

function defaultState() {
  return {
    unlockedCastles: ["daily-routine"],
    completedGames: {},   // { [castleId]: { [gameId]: true } }
    jewels: [],           // [{ id, castleId, color }]
  };
}

let state = load();

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — progress just won't persist */
  }
}

export const Store = {
  get() {
    return state;
  },
  isCastleUnlocked(castleId) {
    return state.unlockedCastles.includes(castleId);
  },
  unlockCastle(castleId) {
    if (!state.unlockedCastles.includes(castleId)) {
      state.unlockedCastles.push(castleId);
      save();
    }
  },
  isGameComplete(castleId, gameId) {
    return !!state.completedGames[castleId]?.[gameId];
  },
  completeGame(castleId, gameId) {
    if (!state.completedGames[castleId]) state.completedGames[castleId] = {};
    state.completedGames[castleId][gameId] = true;
    save();
  },
  castleProgress(castleId, totalGames) {
    const done = Object.keys(state.completedGames[castleId] || {}).length;
    return { done, total: totalGames, complete: done >= totalGames };
  },
  addJewel(jewel) {
    state.jewels.push(jewel);
    save();
  },
  jewels() {
    return state.jewels;
  },
  reset() {
    state = defaultState();
    save();
  },
};
