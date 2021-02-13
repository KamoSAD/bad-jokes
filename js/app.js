// -- VARIABLES -- //

const root = document.getElementById("root");
import { jokes } from "./jokes.js";
const jokeArea = document.getElementById("joke");

function randomizer(jokeArray) {
  const randomIndex = Math.floor(Math.random() * jokeArray.length);
  console.log(jokeArray[randomIndex]);

  jokeArea.textContent = jokeArray[randomIndex];
}

// -- BODY -- //

window.addEventListener(`keypress`, () => {
  randomizer(jokes);
});

root.addEventListener(`click`, () => {
  randomizer(jokes);
});
