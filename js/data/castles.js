// Metadata for every castle on the map. To add a new unit later:
// 1. create js/data/units/<id>.js with its game content (same shape as dailyRoutine.js)
// 2. import it in app.js's UNIT_CONTENT map
// 3. add an entry here — it will show up locked until the previous castle unlocks it.

const CASTLES = [
  {
    id: "daily-routine",
    name: "Daily Routine",
    art: "castleRoutine",
    x: 50, y: 92,
    unlocksNext: "family",
  },
  {
    id: "family",
    name: "My Family",
    art: "castleFamily",
    x: 22, y: 68,
    unlocksNext: "colors-numbers",
  },
  {
    id: "colors-numbers",
    name: "Colors & Numbers",
    art: "castleColors",
    x: 68, y: 50,
    unlocksNext: "animals",
  },
  {
    id: "animals",
    name: "Animals",
    art: "castleAnimals",
    x: 26, y: 30,
    unlocksNext: "story-time",
  },
  {
    id: "story-time",
    name: "Story Time",
    art: "castleStory",
    x: 62, y: 10,
    unlocksNext: null,
  },
];

export default CASTLES;
