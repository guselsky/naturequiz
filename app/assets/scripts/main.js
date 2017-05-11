var objectImages = document.querySelectorAll('.flower-image');
var tiles = document.querySelectorAll('.flower-tile');
var promptText = document.querySelector('#prompt-word');
var flowerButton = document.querySelector('#flowers-button');
var treeButton = document.querySelector('#trees-button');
// Create an array to store selected Flowers's names
var objectNames = [];
var promptedObject = '';
var objectImageTag = '';
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
		objectNames.push(objectName);
	}

	// Set a random prompted flower
	var randomNumber = Math.floor(Math.random() * 6);
	promptedObject = objectNames[randomNumber];
	objectImageTag = objectImages[randomNumber];

	// Change the prompt
	promptText.textContent = promptedObject;
}



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
	if (promptedObject === objectNames[sel]) {
		alert('correct');
		if (selectedMode === 1) {
			reset(flowers);
		} else if (selectedMode === 2) {
			reset(trees);
		}
	} 
}
	
// Make a correct statement

// Make a counter

// Add another language

// Decentralize code