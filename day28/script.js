// using Axios
const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

function getUser(username) {
  axios(API_URL + username)
    .then((response) => {
      createUserCard(response.data);
      getRepos(username);
    })
    .catch((error) => {
      if (error.response.status == 404) {
        createErrorCard("No profile found with this username!");
      }
    });
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");

    addRepostoCard(data);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("Failed fetching repository.");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}'s Github Avatar"
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repositories</strong></li>
      </ul>

      <div id="repos">
      </div>
    </div>
  </div>
    `;

  main.innerHTML = cardHTML;
}

function addRepostoCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerHTML = repo.name;

    reposEl.appendChild(repoLink);
  });
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>
  </div>`;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
