//console.log('%c HI', 'color: firebrick')
let breeds;

//on page load
//fetch the images using the url below⬆️
//parse the response as JSON
//add image elements to the DOM for each🤔 image in the array
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => getDogs(json));


//on page load, fetch all the dog breeds using the url below ⬆️
//add the breeds to the page in an <ul> (take a look at the included index.html)
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => getBreeds(json));

//Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
//When the user clicks any of the dog breed list items, the color the text should change.
   function getDogs(json) {
    const imgContainer = document.querySelector("#dog-image-container");
    let arr = json.message;
    arr.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      imgContainer.append(img);
    });
  }

  function getBreeds(json) {
    const breedContainer = document.querySelector("#dog-breeds");
    breeds = Object.keys(json.message);
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.innerText = breed;
      breedContainer.append(li);
      makePinkOnClick(li);
    });
  }

  //Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
  //For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
  function filterDropdown() {
    const breedContainer = document.querySelector("#dog-breeds");
    const select = document.querySelector("#breed-dropdown");
    const letter = select.value;
    breedContainer.innerHTML = "";
    breeds.forEach(breed => {
      if (breed.startsWith(letter)) {
        const li = document.createElement("li");
        li.innerText = breed;
        breedContainer.append(li);
        makePinkOnClick(li);
      }
    });
  }
  
  function makePinkOnClick(li) {
    li.addEventListener("click", function(e) {
      li.style.color = "hotpink";
    });
  }