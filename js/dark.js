const darkBtn = document.getElementById("dark");
const root = document.getElementById("root");
const text = document.getElementById("text");
const jokeArea = document.getElementById("joke");

darkBtn.addEventListener("click", () => {
  text.classList.toggle("darkmode");
  jokeArea.classList.toggle("darkmode");

  document.body.classList.toggle("darkbg");

  if (darkBtn.textContent === "🌞") {
    darkBtn.textContent = "🌚";
  } else if (darkBtn.textContent === "🌚") {
    darkBtn.textContent = "🌞";
  } else {
    location.reload();
  }
});
