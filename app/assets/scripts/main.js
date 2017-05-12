var objectImages = document.querySelectorAll('.flower-image');
var tiles = document.querySelectorAll('.flower-tile');
var promptText = document.querySelector('#prompt-text');
var promptWord = document.querySelector('#prompt-word');
var flowerButton = document.querySelector('#flowers-button');
var treeButton = document.querySelector('#trees-button');
// Create an array to store selected Flowers's names
var objectNames = [];
var promptedObject = '';
var selectedObject = '';
var selectedMode = "";

init();

function init() {
	selectFlowerObject();
	selectTreeObject();
}

// if Flowers is clicked make the quiz about flowers
	function selectFlowerObject() {
		flowerButton.addEventListener('click', function() {
		selectedMode = 1;
		reset(flowers);
	});
}

// if Trees is clicked, make the quiz about Trees
function selectTreeObject() {
	treeButton.addEventListener('click', function() {
		selectedMode = 2;
		reset(trees);
	});
}

function reset(natureObject) {

	randomNumbers(natureObject.length);
	shuffle(randomNumbersArray);
	setUpTheTiles(randomNumbersArray, natureObject);
}

// Make an array of numbers the size of the object
function randomNumbers(objectLength) {
		
	randomNumbersArray = [];

	for (var i = 0; i < objectLength; i++) {
		randomNumbersArray.push(i);
	}
}

// Create a shuffle function
function shuffle(array) {
	var j, x, i;
	for (i = array.length; i; i--) {
		j = Math.floor(Math.random()* i);
		x = array[i - 1];
		array[i -1] = array[j];
		array[j] = x;
	}
}

// Set up the Quiz Tiles
function setUpTheTiles(randomNumbersArray, natureObject) {

	// Create an array to store selected Flowers's names
	objectNames = [];

	for (var i = 0; i < objectImages.length; i++) {

		var objectFileName = natureObject[randomNumbersArray[i]].fileName;
		var objectName = natureObject[randomNumbersArray[i]].name;

		objectImages[i].src = "assets/images/" + objectFileName;
		objectImages[i].classList.remove('flower-image--correct');
		objectImages[i].classList.remove('flower-image--incorrect');
		promptText.classList.remove('correct');
		// promptText.classList.remove('incorrect');
		objectNames.push(objectName);
	}

	// Set a random prompted flower
	var randomNumber = Math.floor(Math.random() * 6);
	promptedObject = objectNames[randomNumber];

	// Change the prompt
	promptText.textContent = "Which one is the ";
	promptWord.textContent = promptedObject;
}

// Set up event listener

tiles[0].addEventListener('click', function() {
	selectedObject = 0;
	queryFunction(selectedObject);		
});
tiles[1].addEventListener('click', function() {
	selectedObject = 1;
	queryFunction(selectedObject);
});
tiles[2].addEventListener('click', function() {
	selectedObject = 2;
	queryFunction(selectedObject);
});
tiles[3].addEventListener('click', function() {
	selectedObject = 3;
	queryFunction(selectedObject);
});
tiles[4].addEventListener('click', function() {
	selectedObject = 4;
	queryFunction(selectedObject);
});
tiles[5].addEventListener('click', function() {
	selectedObject = 5;
	queryFunction(selectedObject);
});


function queryFunction(sel) {
	// Find out the position of the selected item
	var objectIndex = objectNames.indexOf(objectNames[sel]);

	// Check if the clicked tile is the correct one
	if (promptedObject === objectNames[sel]) {
	
		objectImages[objectIndex].classList.add('flower-image--correct');
		promptText.textContent = "Correct!";
		promptText.classList.add('correct');
		promptWord.textContent = '';
		// Start new round after 2 seconds
		setTimeout(function() {nextRound();}, 1000);
	} else {
		objectImages[objectIndex].classList.add('flower-image--incorrect');
	}
}

function nextRound() {
	// Play the next round
	if (selectedMode === 1) {
		reset(flowers);
	} else if (selectedMode === 2) {
		reset(trees);
	}
}
	
// Make a correct/incorrect statement

// Make a counter

// Add another language

// Decentralize code#

// different pictures

// animations

// Create a progress bar