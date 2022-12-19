const form = document.getElementById("poem-form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value;

  const title = document.getElementById("title").value;

  const poem = document.getElementById("poem").value;

  if (name === "" || title === "" || poem === "") {

    alert("Please fill out all fields");

  } else {

    alert("Your poem has been submitted!");

  }

});

