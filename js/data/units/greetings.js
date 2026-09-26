// Content for the "Hello & Feelings" castle.
// Genuinely new vocabulary (not a repeat of daily-routine words she may
// already know), and framed as the mascot talking WITH her — first-person,
// conversational lines — instead of flat third-person description, matching
// the communicative style her language class already uses.

const VOCAB = {
  happy: { art: "sceneHappy", word: "happy" },
  sad: { art: "sceneSad", word: "sad" },
  tired: { art: "sceneTired", word: "tired" },
  hungry: { art: "sceneHungry", word: "hungry" },
  surprised: { art: "sceneSurprised", word: "surprised" },
  scared: { art: "sceneScared", word: "scared" },
  hello: { art: "sceneHello", word: "hello" },
  howAreYou: { art: "sceneHowAreYou", word: "how are you" },
  imHappy: { art: "sceneImHappy", word: "I'm happy" },
  niceToMeet: { art: "sceneNiceToMeet", word: "nice to meet you" },
  goodbye: { art: "sceneGoodbye", word: "goodbye" },
};

const greetings = {
  id: "greetings",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconHeart",
      intro: "Listen to how I feel, then find my face!",
      rounds: [
        { text: "Hi! I'm happy today!", correct: "happy", options: ["happy", "sad", "tired", "scared"] },
        { text: "Oh no, I'm sad.", correct: "sad", options: ["sad", "happy", "surprised", "hungry"] },
        { text: "I'm so tired.", correct: "tired", options: ["tired", "happy", "hungry", "surprised"] },
        { text: "I'm hungry!", correct: "hungry", options: ["hungry", "sad", "tired", "scared"] },
        { text: "Wow, I'm surprised!", correct: "surprised", options: ["surprised", "happy", "sad", "hungry"] },
        { text: "I'm a little scared.", correct: "scared", options: ["scared", "tired", "surprised", "happy"] },
      ],
    },
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconMoon",
      intro: "Let's practice a conversation! Drag the pictures in order!",
      storyLine: "Hello! How are you? I'm happy! Nice to meet you! Goodbye!",
      steps: [
        { text: "Hello!", key: "hello" },
        { text: "How are you?", key: "howAreYou" },
        { text: "I'm happy!", key: "imHappy" },
        { text: "Nice to meet you!", key: "niceToMeet" },
        { text: "Goodbye!", key: "goodbye" },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeFriendship",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default greetings;
