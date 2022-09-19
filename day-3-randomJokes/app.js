const button = document.querySelector(".btn");
const jokeText = document.querySelector(".container p");

document.addEventListener("DOMContentLoaded", getJokes);

button.addEventListener("click", getJokes);

async function getJokes() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObject = await jokeData.json();
  jokeText.innerHTML = jokeObject.joke;
}
