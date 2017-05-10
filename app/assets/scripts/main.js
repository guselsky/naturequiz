var flowerImages = document.querySelectorAll('.flower-image');
var promptText = document.querySelector('#prompt-word');
var flowers = [
		{
		name: "Tulip",
		fileName: "tulip.jpg"
	},
	{
		name: "Daffodil",
		fileName: "daffodil.jpg"
	},
	{
		name: "Buttercup",
		fileName: "buttercup.jpg"
	},
	{
		name: "Daisy",
		fileName: "daisy.jpg"
	},
	{
		name: "Dandelion",
		fileName: "dandelion.jpg"
	},
	{
		name: "Nettle",
		fileName: "nettle.jpg"
	},
	{
		name: "Poppy",
		fileName: "poppy.jpg"
	},
	{
		name: "Sunflower",
		fileName: "sunflower.jpg"
	},
	{
		name: "White clover",
		fileName: "white-clover.jpg"
	},
	{
		name: "Thistle",
		fileName: "thistle.jpg"
	},
];

// Make an array of unique numbers from 1 to 10
var randomNumbers = [0,1,2,3,4,5,6,7,8,9];


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

// Shuffle The Array
shuffle(randomNumbers);

// Create an array to store selected Flowers's names
var flowerNames = [];

for (var i = 0; i < flowerImages.length; i++) {

	var flowerFileName = flowers[randomNumbers[i]].fileName;
	var flowerName = flowers[randomNumbers[i]].name;

	flowerImages[i].src = "assets/images/" + flowerFileName;
	flowerNames.push(flowerName);
}

// Set a random prompted flower
var randomNumber = Math.floor(Math.random() * 6);
var promptedFlower = flowerNames[randomNumber];


// Change the prompt
promptText.textContent = promptedFlower;

// listen for Clicks

