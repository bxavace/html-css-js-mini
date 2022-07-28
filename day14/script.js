const button = document.getElementById("toggle");
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});
