const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
  fetchDogs();
  fetchBreeds();
});

function fetchDogs() {
  return fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      renderImage(data.message);
    });
}

function renderImage(json) {
  let container = document.getElementById("dog-image-container");

  json.forEach(dog => {
    const img = document.createElement("img");
    img.src = dog;
    container.appendChild(img);
  });
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      renderBreeds(data.message);
    });
}
function renderBreeds(json) {
  const dogBreedsUl = document.querySelector("#dog-breeds");
  const breeds = Object.keys(json);

  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerHTML = breed;
    dogBreedsUl.appendChild(li);
    li.addEventListener("click", updateColor);
  });
  makeBreedsFilter();
}

function updateColor(e) {
  e.target.style.color = "#bf2d38";
}

function makeBreedsFilter() {
  const dropdown = document.getElementById("breed-dropdown");

  dropdown.addEventListener("change", e => filterBreeds(e.target.value));
}

function filterBreeds(selection) {
  console.log(selection);

  const dogBreeds = document.querySelector("#dog-breeds").children;

  for (let i = 0; i < dogBreeds.length; i++) {
    if (dogBreeds[i].innerText.charAt(0) != selection) {
      dogBreeds[i].style.display = "none";
    } else {
      dogBreeds[i].style.display = "";
    }
  }

  makeBreedsFilter();
}
