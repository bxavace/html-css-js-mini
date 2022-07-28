// https://softwareengineering.stackexchange.com/questions/364086/why-use-const-foo-instead-of-function-foo

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // +string converts that variable to an integer.
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 300;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1.5);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
