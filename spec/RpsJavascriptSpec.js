describe('Rock, Paper, Scissors', function() {

	beforeEach(function() {
			rock = new Rock();
			scissors = new Scissors();
			game = new RockPaperScissors();
	});

	describe('game rules', function(){

		it('rock should beat scissors', function () {
			expect(game.compare(rock, scissors)).toEqual(rock);
		});

		it('scissors is beaten by rock', function (){
			expect(game.compare(scissors, rock)).toEqual(rock);
		});

		it('scissors vs scissors should return draw object', function() {
			expect(game.compare(scissors, scissors)).toEqual('draw');
		});
	});

	describe('types of gestures', function () {
		it('rock knows its gesture is rock', function() {
			expect(rock.gesture).toEqual("Rock")
		});
		it('rock knows it beats scissors', function() {
			expect(rock.beats).toEqual("Scissors")
		});
	});
	
});