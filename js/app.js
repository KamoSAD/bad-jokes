// -- VARIABLES -- //

const body = document.body;
import { jokes } from "./jokes.js";
const jokeArea = document.getElementById("joke");

function randomizer(jokeArray) {
  const randomIndex = Math.floor(Math.random() * jokeArray.length);
  console.log(jokeArray[randomIndex]);

  jokeArea.textContent = jokeArray[randomIndex];
}

// -- BODY -- //

body.addEventListener(`keypress`, () => {
  randomizer(jokes);
});

body.addEventListener(`click`, () => {
  randomizer(jokes);
});
