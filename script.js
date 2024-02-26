const quotes = {
  Funny: [
    "I don't have a bad handwriting, I have my own font.",
    "I'm not lazy, I'm on energy-saving mode.",
    "I put the 'pro' in procrastination.",
    "I'm not clumsy, I'm just testing the gravity... frequently.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Never trust people who smile constantly. They're either selling something or have no idea what's happening.",
    "Change is inevitable, except from a vending machine.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Behind every great man is a woman rolling her eyes.",
    "If at first, you don't succeed, then skydiving is definitely not for you.",
  ],
  Motivation: [
    "It does not matter how slowly you go as long as you do not stop.",
    "The secret of getting ahead is getting started.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "In the middle of difficulty lies opportunity.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
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
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
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
