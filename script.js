const form = document.querySelector("#poem-form");

const poemDisplay = document.querySelector("#poem-display");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const title = form.querySelector("#title").value;

  const author = form.querySelector("#author").value;

  const poem = form.querySelector("#poem").value;

  const poemDiv = document.createElement("div");

  poemDiv.classList.add("poem");

  poemDiv.innerHTML = `

    <h3>${title}</h3>

    <p class="author">by ${author}</p>

    <p>${poem}</p>

  `;

  poemDisplay.appendChild(poemDiv);

  form.reset();

});

