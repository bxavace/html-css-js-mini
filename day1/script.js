// Functionality:
// Literally just change the class.

const panels = document.querySelectorAll(".panel"); // Returns a NodeList of panel class

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
