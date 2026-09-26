import ART from "../art.js";
import { shuffle, centerOf } from "../utils.js";
import { Sfx } from "../audio.js";
import { Fx } from "../effects.js";
import { mascotSay } from "../mascot.js";

export function renderListenAndFind(stage, { unit, game, setProgress, onComplete }) {
  const rounds = shuffle(game.rounds);
  let index = 0;
  let locked = false;

  mascotSay("game-intro-" + game.id, game.intro);
  playRound();

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
