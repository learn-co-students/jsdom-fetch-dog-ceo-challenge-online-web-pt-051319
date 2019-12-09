console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    let listItem = document.getElementsByTagName("li");
    let breedDropDown = document.getElementById("breed-dropdown");

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => { fetchImages(data.message)});

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => { fetchBreeds(data.message) });

    breedDropDown.addEventListener("change", event => {
      let letter = event.target.value;
      
      for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].innerText[0] === letter) {
          listItem[i].hidden = false;
        } else {
          listItem[i].hidden = true;
        }
      }
    });
});

function fetchImages(images) {
    const dogImageContainer = document.querySelector('#dog-image-container')
    
    images.forEach(dog => {
        const img = document.createElement('img')
        img.src = dog
        dogImageContainer.appendChild(img)
    });
}

function fetchBreeds(breedName) {
    let dogBreeds = document.querySelector('#dog-breeds')
    let breeds = Object.keys(breedName)
    let listItem = document.getElementsByTagName("li");
    
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.innerHTML = breed
        dogBreeds.appendChild(li)
        
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].addEventListener("click", function() {
            listItem[i].style.color = '#00ff00';
            });
        }
    });
}
