console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
fetchDogs()
fetchBreeds()

});



function fetchDogs() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(data => {renderDogs(data.message)})
}

function renderDogs(json) {
  let container = document.getElementById('#dog-image-container')
  
  json.message.forEach(dog => {
    let img = document.createElement("img");
    img.src = imgUrl;
    container.appendChild(img)
  })
}

function fetchBreeds() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {renderBreeds(data.message)});
}
 
function renderBreeds(json) {
  let ul = document.getElementById('#dog-breeds');
  removeChildren(ul);
  json.forEach(json => )
}


//???