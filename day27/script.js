const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "I love coding!",
  "I hate coding.",
  "I love coding more!",
  "I really hate coding...",
  "UWU Coding!",
  "Urgh, coding.",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotif());

function createNotif(message = null, type = null) {
  const child = document.createElement("div");
  child.innerHTML = message ? message : getRandomMessage();
  child.classList.add("toast");
  child.classList.add(type ? type : getRandomType());
  toasts.appendChild(child);
  setTimeout(() => {
    toasts.removeChild(child);
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
