const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

var neo_audio = document.getElementById("neo");
var maple_audio = document.getElementById("maple");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  neo_audio.play();
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  neo_audio.pause();
  neo_audio.currentTime = 0;
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  maple_audio.play();
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  maple_audio.pause();
  maple_audio.currentTime = 0;
});
