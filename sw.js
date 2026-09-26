const CACHE_NAME = "kingdom-english-v5";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/app.js",
  "./js/art.js",
  "./js/audio.js",
  "./js/effects.js",
  "./js/mascot.js",
  "./js/state.js",
  "./js/utils.js",
  "./js/drag.js",
  "./js/data/castles.js",
  "./js/data/registry.js",
  "./js/data/units/dailyRoutine.js",
  "./js/data/units/family.js",
  "./js/data/units/colorsNumbers.js",
  "./js/data/units/animals.js",
  "./js/data/units/storyTime.js",
  "./js/screens/mapScreen.js",
  "./js/screens/castleScreen.js",
  "./js/screens/gameScreen.js",
  "./js/screens/rewardScreen.js",
  "./js/screens/treasureScreen.js",
  "./js/games/listenAndFind.js",
  "./js/games/listenAndOrder.js",
  "./js/games/jigsawPuzzle.js",
  "./assets/icons/icon-192.svg",
  "./assets/icons/icon-512.svg",
  "./assets/icons/icon-maskable.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
