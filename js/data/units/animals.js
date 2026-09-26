// Content for the "Animals" castle.
// Listen & Find uses "has got" (matching what she's practicing in class right
// now) to describe each animal's most visible feature — teaches the grammar
// and the vocab together instead of a plain "this is a..." match.

const VOCAB = {
  dog: { art: "sceneDog", word: "dog" },
  cat: { art: "sceneCat", word: "cat" },
  cow: { art: "sceneCow", word: "cow" },
  duck: { art: "sceneDuck", word: "duck" },
  sheep: { art: "sceneSheep", word: "sheep" },
  bunny: { art: "sceneBunny", word: "bunny" },
};

const animals = {
  id: "animals",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconPaw",
      intro: "Listen, then touch the right animal!",
      rounds: [
        { text: "It has got floppy ears.", correct: "dog", options: ["dog", "cat", "cow", "duck"] },
        { text: "It has got long whiskers.", correct: "cat", options: ["cat", "dog", "sheep", "bunny"] },
        { text: "It has got two horns.", correct: "cow", options: ["cow", "sheep", "duck", "dog"] },
        { text: "It has got an orange beak.", correct: "duck", options: ["duck", "bunny", "cat", "cow"] },
        { text: "It has got soft, fluffy wool.", correct: "sheep", options: ["sheep", "cow", "bunny", "dog"] },
        { text: "It has got long, tall ears.", correct: "bunny", options: ["bunny", "cat", "duck", "sheep"] },
      ],
    },
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconMoon",
      intro: "Listen to the story. Drag the pictures in order!",
      storyLine: "Once upon a time, a girl visited a farm. She saw a dog. She saw a cat. She saw a cow. She saw a duck. And she saw a sheep.",
      steps: [
        { text: "She saw a dog.", key: "dog" },
        { text: "She saw a cat.", key: "cat" },
        { text: "She saw a cow.", key: "cow" },
        { text: "She saw a duck.", key: "duck" },
        { text: "She saw a sheep.", key: "sheep" },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeAnimalFriends",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default animals;
