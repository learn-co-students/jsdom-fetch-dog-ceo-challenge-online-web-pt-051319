console.log('%c HI', 'color: firebrick');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const clickColor = 'red';
let imageContainer = null;
let breedContainer = null;
let filterOption = null;
let breedArray = null;

document.addEventListener('DOMContentLoaded', () => {
	imageContainer = document.getElementById('dog-image-container');
	breedContainer = document.getElementById('dog-breeds');
	filterOption = document.getElementById('breed-dropdown');
	getImages();
	getBreeds();

	filterOption.addEventListener('change', (event) => {
		if(breedArray && filterOption.value != ""){
			let filteredBreeds = [];
			breedArray.forEach((breed) => {
				if(breed[0] == filterOption.value) {
					filteredBreeds.push(breed);
				};
			});
			console.log('filteredBreeds', filteredBreeds)
			listBreeds(filteredBreeds)
		} else if(breedArray){
			listBreeds(breedArray);
		}
	})
});

document.addEventListener('click', (event) => {
	if(event.target.tagName = 'LI' && event.target.tagName != 'SELECT'){
		toggleColor(event.target);
	}
})

const getImages = () => {
	fetch(imgUrl)
		.then(r => r.json())
		.then(rj => showImages(rj.message));
}

const getBreeds = () => {
	fetch(breedUrl)
		.then(r => r.json())
		.then(rj => makeBreedArray(rj.message))
		.then(rja => listBreeds(rja));
}

const showImages = (images) => {
	images.forEach((image) => {
		let imgElement = document.createElement('img');
		imgElement.src = image;
		imageContainer.appendChild(imgElement);
	})
}

const toggleColor = (element) => {
	element.style.color = element.style.color == 'red' ? 'black' : 'red';
}

const makeBreedArray = (breeds) => {
	breedArray = Object.keys(breeds);
	return breedArray;
}

const listBreeds = (breeds) => {
	breedContainer.innerHTML = "";
	breeds.forEach((breed) => {
		let breedLI = document.createElement('li');
		breedLI.textContent = breed;
		breedContainer.appendChild(breedLI);
	})
}

// dog-image-container