// Content for the "Daily Routine" castle — the one fully-built unit.
// Follows a real pedagogical sequence: learn the words → practice them →
// hear them in a full sentence/story → use them in a real spoken exchange
// → puzzle reward. Add a new castle later by writing a sibling file with
// the same shape (vocab + steps) and registering it in registry.js.

const VOCAB = {
  wakeUp: { art: "sceneWakeUp", word: "wake up", sentence: "She wakes up." },
  breakfast: { art: "sceneBreakfast", word: "eat breakfast", sentence: "She eats breakfast." },
  toothbrush: { art: "sceneToothbrush", word: "brush her teeth", sentence: "She brushes her teeth." },
  dressed: { art: "sceneDressed", word: "get dressed", sentence: "She gets dressed." },
  school: { art: "sceneSchool", word: "go to school", sentence: "She goes to school." },
  bath: { art: "sceneBath", word: "take a bath", sentence: "She takes a bath." },
  sleep: { art: "sceneSleep", word: "go to sleep", sentence: "She goes to sleep." },
};

const dailyRoutine = {
  id: "daily-routine",
  vocab: VOCAB,
  steps: [
    {
      id: "learn",
      type: "word-learn",
      name: "Learn the Words",
      icon: "iconSun",
      intro: "Let's learn some new words!",
      words: ["wakeUp", "breakfast", "toothbrush", "dressed", "school", "bath", "sleep"],
    },
    {
      id: "practice",
      type: "word-practice",
      name: "Practice",
      icon: "iconHeart",
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
      id: "sentence",
      type: "sentence-build",
      name: "Tell the Story",
      icon: "iconBook",
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
      id: "conversation",
      type: "conversation",
      name: "Let's Talk!",
      icon: "iconChat",
      exchange: {
        question: "Good morning! Can you tell me — what do you do every morning?",
        art: "sceneWakeUp",
      },
    },
    {
      id: "puzzle",
      type: "puzzle",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeUnicorn",
      grid: 3,
    },
  ],
};

export default dailyRoutine;
