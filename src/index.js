console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    return fetch(imgUrl)
        .then(response => response.json())
        .then(data => { renderDogs(data.message) });
    }

function renderDogs(json) {
    const dogImageContainer = document.querySelector('#dog-image-container')
    json.forEach(dog => {
        const img = document.createElement('img')
        img.src = dog
        dogImageContainer.appendChild(img)
    })
}

function fetchBreeds() {
    return fetch(breedUrl)
        .then(response => response.json())
        .then(data => { renderBreeds(data.message) });
}

function renderBreeds(json) {
    const dogBreedsUl = document.querySelector('#dog-breeds')
    const breeds = Object.keys(json)
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        dogBreedsUl.appendChild(li)
        li.addEventListener('click', updateColor)
    })
    makeBreedsFilterable()
}

function updateColor(event) {
    // add code here
    event.target.style.color = '#bf2d38'
}

function makeBreedsFilterable() {
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', event => filterBreeds(event.target.value));
}

function filterBreeds(selection) {
    console.log(selection);
    const dogBreeds = document.querySelector('#dog-breeds').children;
    for (let i = 0; i < dogBreeds.length; i++ ) {
        if (dogBreeds[i].innerText.charAt(0) != selection) {
            dogBreeds[i].style.display = "none"
        } else {
            dogBreeds[i].style.display = ""
        }
    }
    makeBreedsFilterable()
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
}) 