console.log("%c HI", "color: firebrick");
let breedArray = [];

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breedList = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");

  fetchImages(imgUrl);
  fetchBreeds(breedUrl);
  breedList.addEventListener("click", colorLi);
  dropdown.addEventListener("change", filterBreeds);
});

function fetchImages(imgUrl) {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayImages(json.message));
}

function displayImages(imageArray) {
  imageArray.forEach(function(element) {
    const container = document.querySelector("#dog-image-container");
    const img = document.createElement("img");
    img.src = element;
    container.appendChild(img);
  });
}

function fetchBreeds(breedUrl) {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => (breedArray = Object.keys(json.message)))
    .then(() => listBreeds(breedArray));
}

function listBreeds(breeds) {
  breedList = document.getElementById("dog-breeds");
  breedList.innerHTML = "";

  breeds.forEach(function(breed) {
    const li = document.createElement("li");
    li.innerText = breed;
    breedList.appendChild(li);
  });
}

function colorLi(e) {
  if (e.target.tagName == "LI") {
    e.target.style.color = "blue";
  }
}

function filterBreeds(e) {
  filteredBreeds = breedArray.filter(init);
  function init(b) {
    return b[0] == e.target.value;
  }
  listBreeds(filteredBreeds);
}
