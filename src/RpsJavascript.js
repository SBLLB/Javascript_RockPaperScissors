function RockPaperScissors() {};

function Rock() {
	this.gesture = "Rock";
	this.beats = "Scissors";
};

function Paper() {
	this.gesture = "Paper";
	this.beats = "Rock";
};

function Scissors() {
	this.gesture = "Scissors";
	this.beats = "Paper";
};

RockPaperScissors.prototype.compare = function(gestureOne, gestureTwo) {
	if (gestureOne.gesture === gestureTwo.gesture) return 'draw'; 
	if (gestureOne.beats === gestureTwo.gesture) return gestureOne;
	else return gestureTwo
};