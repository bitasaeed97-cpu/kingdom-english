import ART from "../art.js";
import { shuffle, centerOf } from "../utils.js";
import { Sfx } from "../audio.js";
import { Fx } from "../effects.js";
import { mascotSay } from "../mascot.js";

export function renderListenAndFind(stage, { unit, game, setProgress, onComplete }) {
  const rounds = shuffle(game.rounds);
  let index = 0;
  let locked = false;

  // Teach each word once, low-pressure, before the quiz starts — jumping
  // straight into testing never actually introduced the vocabulary.
  const teachKeys = [...new Set(rounds.map((r) => r.correct))];
  let teachIndex = 0;
  let teachTimer = null;

  mascotSay("game-intro-" + game.id, "Let's learn some new words first!");
  setTimeout(playTeach, 1400);

  function playTeach() {
    const key = teachKeys[teachIndex];
    const round = rounds.find((r) => r.correct === key);
    stage.innerHTML = `
      <div class="teach-card" id="teach-card">${ART[unit.vocab[key].art]()}</div>
      <div class="teach-hint">👉 Tap to continue</div>
    `;
    const card = stage.querySelector("#teach-card");
    const advance = () => {
      clearTimeout(teachTimer);
      teachIndex++;
      if (teachIndex >= teachKeys.length) {
        mascotSay("game-quiz-" + game.id, game.intro);
        setTimeout(playRound, 1600);
      } else {
        playTeach();
      }
    };
    card.addEventListener("click", advance);
    mascotSay("teach-" + key, round.text, { repeat: true, onEnd: () => {
      teachTimer = setTimeout(advance, 700);
    } });
  }

  function playRound() {
    locked = false;
    const round = rounds[index];
    setProgress(index, rounds.length);

    const options = shuffle(round.options);

    stage.innerHTML = `
      <button class="replay-btn pulse" id="btn-replay">${ART.speaker()}</button>
      <div class="choices-grid" id="choices"></div>
    `;

    const grid = stage.querySelector("#choices");
    options.forEach((key) => {
      const card = document.createElement("button");
      card.className = "choice-card";
      card.dataset.key = key;
      card.innerHTML = ART[unit.vocab[key].art]();
      card.addEventListener("click", () => onPick(card, key, round));
      grid.appendChild(card);
    });

    stage.querySelector("#btn-replay").addEventListener("click", () => speakRound(round));
    speakRound(round);
  }

  function speakRound(round) {
    mascotSay("round-" + round.correct, round.text, { repeat: true });
  }

  function onPick(card, key, round) {
    if (locked) return;
    if (key === round.correct) {
      locked = true;
      card.classList.add("correct");
      Sfx.correct();
      const c = centerOf(card);
      Fx.sparkleAt(c.x, c.y);
      setTimeout(() => {
        index++;
        if (index >= rounds.length) {
          setProgress(rounds.length, rounds.length);
          mascotSay("game-done-" + game.id, "Great listening!");
          setTimeout(onComplete, 1600);
        } else {
          playRound();
        }
      }, 900);
    } else {
      card.classList.add("wrong");
      Sfx.wrong();
      setTimeout(() => card.classList.remove("wrong"), 450);
    }
  }
}
