function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderDogs(json))
}

function renderDogs(json) {
    const div = document.querySelector("#dog-image-container")
    console.log(json)
    json.message.forEach(dog => {
        const image = document.createElement("img")
        image.src = dog
        div.appendChild(image)
    })
}

function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    let allBreeds = [];
    let i = 0;

    const ul = document.querySelector("#dog-breeds")
    for (const breed in json.message) {
        allBreeds[i] = breed
        const li = document.createElement("li")
        li.id = breed
        li.innerText = breed
        ul.appendChild(li)
        i++
        li.addEventListener("click", function () {
            this.style.color = "red";
        });
    }

    const breedSelect = document.querySelector("#breed-dropdown")
    breedSelect.addEventListener("change", function (event) {
        const selection = event.target.value
        ul.innerHTML = "";
        let filteredBreed = allBreeds.filter(function (breed) {
            return breed[0] === selection
        });

        filteredBreed.forEach(breed => {
            const li = document.createElement("li")
            li.id = breed
            li.innerText = breed
            ul.appendChild(li)
        })
    })

}


document.addEventListener("DOMContentLoaded", function () {
    fetchDogs()
    fetchBreeds()
    // const breedSelect = document.querySelector("#breed-dropdown")
    // breedSelect.addEventListener("change", function (event) {
    //     const selection = event.target.value
    // })
})