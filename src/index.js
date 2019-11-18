console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener("DOMContentLoaded", function {
    fetchImages();

})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    }).then(results => {
        results.message.forEach(image => addImage(image))
});
}


const dogImage = document.getElementById("dog-image-container")
