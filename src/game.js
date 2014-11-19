var game = new RockPaperScissors
var gest = {rock: new Rock, paper: new Paper, scissors: new Scissors}
var computerGesture = null;
var playerGesture = null;

var computersChoice = function() {
	var gestures = [new Rock,  new Paper, new Scissors];
	computerGesture =  gestures[Math.floor(Math.random()* gestures.length)];
	return computerGesture
};

var andTheWinnerIs = function(result) {
	if(result === "draw")
		$('h2').text("Snap, it's a " + (result) + " play again");
	else if(result === playerGesture) $('h2').text("Well done, you win!");
	else $('h2').text("Unlucky, the computer won this time!");
};

var playersChoice = function(choice) {
	playerGesture = gest[$(choice).data('gesture')];
	return playerGesture;
};

	$('img').on('click', function() {
		andTheWinnerIs(game.compare(playersChoice(this), computersChoice()));
	});

	$('img').on('click', function() {
		$(".playersChoice").text("You chose " + (playerGesture.gesture))
	 });

	$('img').on('click', function() {
		$(".computersChoice").text("The Computer chose " + (computerGesture.gesture))
	});
