console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(element => {
        addImageElement(element);
      });
      // 1. access array of URLS
      // 2. iterate over with forEach
      // 3. call addImageEle for each url
    });

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      for (const key in data.message) {
        addDogBreed(key);
      }
    });

  let listItem = document.getElementsByTagName("li");
  let dropDown = document.getElementById("breed-dropdown");
  dropDown.addEventListener("change", event => {
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

function addImageElement(imageURL) {
  let dogDiv = document.getElementById("dog-image-container");
  // 0. get ref to do-image-container
  // 1. create img element
  let img = document.createElement("img");
  // console.dir(img);
  img.src = imageURL;
  dogDiv.appendChild(img);
  // 2. set image src = imageURL
  // 3. append img to container
}

function addDogBreed(breedName) {
  let dogList = document.getElementById("dog-breeds");
  let li = document.createElement("li");
  li.innerHTML = breedName;
  dogList.appendChild(li);

  let listItem = document.getElementsByTagName("li");
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", function() {
      listItem[i].style.color = "magenta";
    });
  }
}
