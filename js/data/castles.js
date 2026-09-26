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
    unlocksNext: "greetings",
  },
  {
    id: "greetings",
    name: "Hello & Feelings",
    art: "castleGreetings",
    x: 28, y: 76,
    unlocksNext: "family",
  },
  {
    id: "family",
    name: "My Family",
    art: "castleFamily",
    x: 68, y: 58,
    unlocksNext: "colors-numbers",
  },
  {
    id: "colors-numbers",
    name: "Colors & Numbers",
    art: "castleColors",
    x: 26, y: 40,
    unlocksNext: "animals",
  },
  {
    id: "animals",
    name: "Animals",
    art: "castleAnimals",
    x: 66, y: 22,
    unlocksNext: "story-time",
  },
  {
    id: "story-time",
    name: "Story Time",
    art: "castleStory",
    x: 40, y: 6,
    unlocksNext: null,
  },
];

export default CASTLES;
