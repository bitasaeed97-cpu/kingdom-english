// Content for the "Daily Routine" castle.
// Kept as plain data so new castles can be added by writing a sibling file
// with the same shape — the game engines in js/games/* are fully generic.

const VOCAB = {
  wakeUp: { art: "sceneWakeUp", word: "wake up" },
  breakfast: { art: "sceneBreakfast", word: "eat breakfast" },
  toothbrush: { art: "sceneToothbrush", word: "brush her teeth" },
  dressed: { art: "sceneDressed", word: "get dressed" },
  school: { art: "sceneSchool", word: "go to school" },
  bath: { art: "sceneBath", word: "take a bath" },
  sleep: { art: "sceneSleep", word: "go to sleep" },
};

const dailyRoutine = {
  id: "daily-routine",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconSun",
      intro: "Listen, then touch the right picture!",
      rounds: [
        { text: "She wakes up.", correct: "wakeUp", options: ["wakeUp", "breakfast", "school", "sleep"] },
        { text: "She eats breakfast.", correct: "breakfast", options: ["breakfast", "toothbrush", "bath", "dressed"] },
        { text: "She brushes her teeth.", correct: "toothbrush", options: ["toothbrush", "wakeUp", "school", "sleep"] },
        { text: "She gets dressed.", correct: "dressed", options: ["dressed", "bath", "breakfast", "school"] },
        { text: "She goes to school.", correct: "school", options: ["school", "bath", "breakfast", "sleep"] },
        { text: "She takes a bath.", correct: "bath", options: ["bath", "sleep", "toothbrush", "wakeUp"] },
      ],
    },
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconMoon",
      intro: "Listen to the story. Drag the pictures in order!",
      storyLine: "Once upon a time, a little girl woke up, ate breakfast, brushed her teeth, got dressed, and went to school.",
      steps: [
        { text: "She woke up.", key: "wakeUp" },
        { text: "She ate breakfast.", key: "breakfast" },
        { text: "She brushed her teeth.", key: "toothbrush" },
        { text: "She got dressed.", key: "dressed" },
        { text: "She went to school.", key: "school" },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeUnicorn",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default dailyRoutine;
