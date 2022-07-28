const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const gifIMG = document.getElementById("gif");
const API_KEY = "XF3v5W02owwmoZr9dcUhtINw3aByLqnW";

jokeBtn.onclick = generateJoke;

generateJoke();
generateGIF();

// Async/Await for GIPHY API
async function generateGIF() {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=giggle`;
  const res = await fetch(url);
  const data = await res.json();
  gifIMG.setAttribute(
    "src",
    data.data[Math.floor(Math.random() * 20)].images.original.url
  );
  console.log(data.data);
}

// Async/Await
async function generateJoke() {
  generateGIF();
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// Fetch and .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
