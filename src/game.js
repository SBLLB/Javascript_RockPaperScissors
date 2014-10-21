var game = new RockPaperScissors
var gest = {rock: new Rock, paper: new Paper, scissors: new Scissors}

var computersChoice = function() {
	var gestures = [new Rock,  new Paper, new Scissors];
	return gestures[Math.floor(Math.random()* gestures.length)];
};

var andTheWinnerIs = function(result) {
	if(result === "draw")
		$('h2').text("Snap, it's a " + (result));
	else
		$('h2').text("The winner is " + (result.gesture));
};

var playersChoice = function(choice) {
	return gest[$(choice).data('gesture')];
};

$('img').on('click', function() {
	andTheWinnerIs(game.compare(playersChoice(this), computersChoice()));	
});

// $('img').on('click', function() {
// 	('#playersChoice').text("You chose " + (playersChoice(this))
// 	('#computersChoice').text("The Computer chose " + (computersChoices))
// });
