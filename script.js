const quotes = {
  Funny: [
    "I don't have a bad handwriting, I have my own font.",
    "I'm not lazy, I'm on energy-saving mode.",
    "I put the 'pro' in procrastination.",
    "I'm not clumsy, I'm just testing the gravity... frequently.",
  ],
  Motivation: [
    "It does not matter how slowly you go as long as you do not stop.",
    "The secret of getting ahead is getting started.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  ],
};
console.log(quotes);
let currentCategory = "Funny";
let currentIndex = 0;

function displayQuote() {
  document.querySelector("#quote").innerHTML =
    quotes[currentCategory][currentIndex];
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote();
}

function prevQuote() {
  currentIndex = (currentIndex - 1) % quotes[currentCategory].length;
  displayQuote();
}

function randomQuote() {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote();
}

function changeCategory() {
  currentCategory = "Motivation";
  currentIndex = 0;
  displayQuote();
}

const toggle_button = document.querySelector("#checkbox");
const container = document.querySelector("#container");

console.log(toggle_button);
toggle_button.addEventListener("change", () => {
  if (toggle_button.checked) {
    container.classList.add("dark-mode");
  } else {
    container.classList.remove("dark-mode");
  }
});

function increaseFont() {
  document.getElementById("quote").style.fontSize = "18px";
}
function decreaseFont() {
  document.getElementById("quote").style.fontSize = "14px";
}

const wrapper = document.querySelector("#wrapper");
toggle_button.addEventListener("change", () => {
  wrapper.classList.toggle("dark-mode");
});
