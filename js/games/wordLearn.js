import ART from "../art.js";
import { mascotSay } from "../mascot.js";

// Step 1 of the pedagogy: introduce each new word on its own, no pressure,
// no wrong answers possible — big picture, spoken twice, tap (or wait) to
// move on. This didn't exist before; the app used to jump straight to
// testing a word it had never actually taught.
export function renderWordLearn(stage, { unit, game, setProgress, onComplete }) {
  const words = game.words;
  let index = 0;

  mascotSay("learn-intro-" + game.id, game.intro || "Let's learn some new words!");
  setTimeout(playWord, 1400);

  function playWord() {
    const key = words[index];
    const item = unit.vocab[key];
    setProgress(index, words.length);

    stage.innerHTML = `
      <div class="teach-card" id="teach-card">${ART[item.art]()}</div>
      <div class="teach-hint">👉 Tap to continue</div>
    `;
    const card = stage.querySelector("#teach-card");
    let timer = null;
    const advance = () => {
      clearTimeout(timer);
      index++;
      if (index >= words.length) {
        setProgress(words.length, words.length);
        mascotSay("learn-done-" + game.id, "Great job learning!");
        setTimeout(onComplete, 1400);
      } else {
        playWord();
      }
    };
    card.addEventListener("click", advance);
    mascotSay("learn-word-" + key, item.sentence || item.word, {
      repeat: true,
      onEnd: () => {
        timer = setTimeout(advance, 700);
      },
    });
  }
}
