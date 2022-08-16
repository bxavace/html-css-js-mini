const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 250 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 0;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 250 / e.target.value));
