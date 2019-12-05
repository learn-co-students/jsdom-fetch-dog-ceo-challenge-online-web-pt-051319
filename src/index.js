console.log('%c HI', 'color: firebrick')

// let breeds = []

document.addEventListener("DOMContentLoaded", () => {
    getImages()
    getBreeds()
})

// function to get image and to iterate through images and to place them in an element
function getImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => { data.message.forEach(image => addImage(image)) //??
    });
}

// function to add image elements to dog-image-container
function addImage(image) {
    //console.log(cat)
    const element = document.getElementById("dog-image-container")
    const img = document.createElement("img")
    img.src = image
    element.appendChild(img)
}

function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {       
        breed = Object.keys(data.message)
        renderBreed(breed)
    });
}

function renderBreed(breed) {
    const ul = document.getElementById("dog-breeds")
    const li = document.createElement("li")
    li.innerHTML = breed
    ul.appendChild(li)
}
//create function for fetching breed list
//1. call fetch
//2. parse json response
//3. iterate over result and call renderBreed function
//4. during iteration, add breed to all breeds array



//create renderBreed function that takes breed name as arguement
//1. get ref. to ul container
//2. create li element
//3. set li text equal to breed name that was passed in
//4. append that to the ul container


//select element need an event listener. What event type happens on select?
//eventListener should contain a function that filters all breed array by letter value that was selected 
//take your new filtered array and re-render li elements (make sure you wipe the previous li's first!)
