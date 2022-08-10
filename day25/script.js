const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log(window.scrollY, nav.offsetHeight + 820);
  if (window.scrollY > nav.offsetHeight + 820) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
