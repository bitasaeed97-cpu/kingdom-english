// Content for the "Story Time" castle — the capstone unit. It weaves
// together vocabulary from earlier castles (daily routine, family, animals)
// into one short story, and tests listening comprehension with "wh"
// questions instead of plain word-picture matching.

const VOCAB = {
  wakeUp: { art: "sceneWakeUp", word: "wake up" },
  breakfast: { art: "sceneBreakfast", word: "eat breakfast" },
  dog: { art: "sceneDog", word: "dog" },
  mom: { art: "sceneMom", word: "mom" },
  sleep: { art: "sceneSleep", word: "go to sleep" },
};

const storyTime = {
  id: "story-time",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconBook",
      intro: "Listen to the story. Drag the pictures in order!",
      storyLine: "Once upon a time, a little girl woke up. She ate breakfast. She played with her dog. She hugged her mom. And then she went to sleep.",
      steps: [
        { text: "She woke up.", key: "wakeUp" },
        { text: "She ate breakfast.", key: "breakfast" },
        { text: "She played with her dog.", key: "dog" },
        { text: "She hugged her mom.", key: "mom" },
        { text: "She went to sleep.", key: "sleep" },
      ],
    },
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconBook",
      intro: "Listen to the question, then touch the right picture!",
      rounds: [
        { text: "What did she do first?", correct: "wakeUp", options: ["wakeUp", "breakfast", "dog", "sleep"] },
        { text: "What did she eat?", correct: "breakfast", options: ["breakfast", "dog", "mom", "sleep"] },
        { text: "Who did she play with?", correct: "dog", options: ["dog", "mom", "breakfast", "wakeUp"] },
        { text: "Who did she hug?", correct: "mom", options: ["mom", "dog", "sleep", "breakfast"] },
        { text: "What did she do at the end?", correct: "sleep", options: ["sleep", "wakeUp", "mom", "dog"] },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeStarryNight",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default storyTime;
