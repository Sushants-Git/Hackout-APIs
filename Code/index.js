let button = document.querySelector("button");
let divEl = document.getElementById("img");

button.addEventListener("click", getCat);

function getCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      divEl.innerHTML = `<img src=${data[0].url} alt="Cat Image">`;
    });
}

getCat(); // To get the Cat Image on the first render of the page (without clicking)
