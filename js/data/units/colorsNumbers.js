// Content for the "Colors & Numbers" castle — a review unit.
// Listen & Find covers colors, Listen & Order covers counting 1-5.

const VOCAB = {
  colorRed: { art: "colorRed", word: "red" },
  colorBlue: { art: "colorBlue", word: "blue" },
  colorYellow: { art: "colorYellow", word: "yellow" },
  colorGreen: { art: "colorGreen", word: "green" },
  colorPurple: { art: "colorPurple", word: "purple" },
  colorPink: { art: "colorPink", word: "pink" },
  numberOne: { art: "numberOne", word: "one" },
  numberTwo: { art: "numberTwo", word: "two" },
  numberThree: { art: "numberThree", word: "three" },
  numberFour: { art: "numberFour", word: "four" },
  numberFive: { art: "numberFive", word: "five" },
};

const colorsNumbers = {
  id: "colors-numbers",
  vocab: VOCAB,
  games: [
    {
      id: "listen-and-find",
      type: "listen-and-find",
      name: "Listen & Find",
      icon: "iconRainbow",
      intro: "Listen, then touch the right color!",
      rounds: [
        { text: "Touch red.", correct: "colorRed", options: ["colorRed", "colorBlue", "colorYellow", "colorGreen"] },
        { text: "Touch blue.", correct: "colorBlue", options: ["colorBlue", "colorPurple", "colorPink", "colorRed"] },
        { text: "Touch yellow.", correct: "colorYellow", options: ["colorYellow", "colorGreen", "colorBlue", "colorPink"] },
        { text: "Touch green.", correct: "colorGreen", options: ["colorGreen", "colorRed", "colorPurple", "colorYellow"] },
        { text: "Touch purple.", correct: "colorPurple", options: ["colorPurple", "colorPink", "colorBlue", "colorGreen"] },
        { text: "Touch pink.", correct: "colorPink", options: ["colorPink", "colorYellow", "colorRed", "colorPurple"] },
      ],
    },
    {
      id: "listen-and-order",
      type: "listen-and-order",
      name: "Listen & Order",
      icon: "iconMoon",
      intro: "Listen and count. Drag the numbers in order!",
      storyLine: "Let's count together! One, two, three, four, five!",
      steps: [
        { text: "One.", key: "numberOne" },
        { text: "Two.", key: "numberTwo" },
        { text: "Three.", key: "numberThree" },
        { text: "Four.", key: "numberFour" },
        { text: "Five.", key: "numberFive" },
      ],
    },
    {
      id: "jigsaw",
      type: "jigsaw",
      name: "Puzzle Prize",
      icon: "sparkleStar",
      intro: "You earned a puzzle! Drag the pieces together!",
      image: "prizeRainbow",
      grid: 3,
      requires: ["listen-and-find", "listen-and-order"],
    },
  ],
};

export default colorsNumbers;
