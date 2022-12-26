const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const body = document.querySelector("anything-but-the-sidebar");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});

// Added feature: toggle the sidebar even when the close button is not clicked (perhaps anything but the sidebar instead)
document.onclick = (event) => {
  console.log(event.target);
  if (
    event.target.className !== "fas fa-bars" &&
    event.target.parentNode.parentNode.className !== "list" &&
    event.target.parentNode.parentNode.className !== "nav nav-black visible"
  ) {
    nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  }
};

// &&
// event.target.parentNode.parentNode.parentNode.parentNode.parentNode
//   .className !== "nav nav-white visible";
