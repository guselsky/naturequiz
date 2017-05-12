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
var roundCount = 2;
var numberOfRounds = roundCount;
var incorrectGuesses = 0;

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
	// display images again after a game is over
	Array.from(objectImages, e => e.style.display = 'block');

	// Create an array to store selected Flowers's names
	objectNames = [];

	// Set up the tiles
	for (var i = 0; i < objectImages.length; i++) {

		var objectFileName = natureObject[randomNumbersArray[i]].fileName;
		var objectName = natureObject[randomNumbersArray[i]].name;
		fadeIn(objectImages[i]);
		objectImages[i].src = "assets/images/" + objectFileName;
		objectImages[i].classList.remove('flower-image--correct');
		objectImages[i].classList.remove('flower-image--incorrect');
		promptText.classList.remove('correct');
		objectNames.push(objectName);
	}

	// Set a random prompted flower
	var randomNumber = Math.floor(Math.random() * 6);
	promptedObject = objectNames[randomNumber];

	// Change the prompt
	promptText.textContent = "Which one is the ";
	promptWord.textContent = promptedObject;
}

// Set up event listeners for the tiles

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

		// Start new round after 1 second
		if (numberOfRounds > 1) {
			setTimeout(function() {nextRound();}, 1000);
		} else {
			setTimeout(function() {stopGame();}, 1000);
		}

	} else {
		objectImages[objectIndex].classList.add('flower-image--incorrect');
		incorrectGuesses += 1;
	}
}

function nextRound() {

	numberOfRounds -= 1;

	// Play the next round
	if (selectedMode === 1) {
		reset(flowers);
	} else if (selectedMode === 2) {
		reset(trees);
	}
}

function stopGame() {

	numberOfRounds = roundCount;
	promptText.classList.remove('correct');
	Array.from(objectImages, e => e.style.display = 'none');

	if (incorrectGuesses === 1) {
		promptText.textContent = 'Game Over. You made ' + incorrectGuesses + ' Mistake.';
	} else {
		promptText.textContent = 'Game Over. You made ' + incorrectGuesses + ' Mistakes.';
	}
}

// Use a fade In Function

function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

// Make a counter


// Add another language

// Decentralize code


// animations

// Create a progress bar