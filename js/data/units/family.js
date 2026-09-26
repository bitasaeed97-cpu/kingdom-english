// Content for the "My Family" castle. Same shape as dailyRoutine.js —
// the game engines in js/games/* don't know or care which unit they're running.

const VOCAB = {
  mom: { art: "sceneMom", word: "mom" },
  dad: { art: "sceneDad", word: "dad" },
  sister: { art: "sceneSister", word: "sister" },
  brother: { art: "sceneBrother", word: "brother" },
  grandma: { art: "sceneGrandma", word: "grandma" },
  grandpa: { art: "sceneGrandpa", word: "grandpa" },
};

const family = {
  id: "family",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconHeart",
      intro: "Listen, then touch the right person!",
      // Uses "has got" to describe each family member's feature — same
      // grammar she's practicing in class right now — instead of a plain
      // "this is my..." match, so the sentence and the vocab train together.
      rounds: [
        { text: "She has got wavy hair.", correct: "mom", options: ["mom", "dad", "sister", "grandma"] },
        { text: "He has got a mustache.", correct: "dad", options: ["dad", "brother", "sister", "mom"] },
        { text: "She has got two pigtails.", correct: "sister", options: ["sister", "brother", "mom", "grandma"] },
        { text: "He has got short, messy hair.", correct: "brother", options: ["brother", "dad", "sister", "grandpa"] },
        { text: "She has got her hair in a bun.", correct: "grandma", options: ["grandma", "grandpa", "mom", "sister"] },
        { text: "He has got glasses.", correct: "grandpa", options: ["grandpa", "dad", "mom", "brother"] },
      ],
    },
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconMoon",
      intro: "Listen to the story. Drag the pictures in order!",
      storyLine: "Once upon a time, a girl visited her family. She hugged her mom. She hugged her dad. She played with her sister. She laughed with her brother. And she kissed her grandma.",
      steps: [
        { text: "She hugged her mom.", key: "mom" },
        { text: "She hugged her dad.", key: "dad" },
        { text: "She played with her sister.", key: "sister" },
        { text: "She laughed with her brother.", key: "brother" },
        { text: "She kissed her grandma.", key: "grandma" },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizePrincess",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default family;
