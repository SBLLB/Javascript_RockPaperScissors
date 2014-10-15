function Rules() {};

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

Rules.prototype.compare = function(gestureOne, gestureTwo) {
	if (gestureOne === gestureTwo) return new Draw; 
	else if (gestureOne.beats === gestureTwo.gesture) return gestureOne;
	else return gestureTwo
};