describe('Rock, Paper, Scissors', function() {

	beforeEach(function() {
			rock = new Rock();
			scissors = new Scissors();
	});


	describe('game rules', function(){
		it('rock should beat scissors', function () {
			rules = new Rules();
			expect(rules.compare(rock, scissors)).toEqual(rock);
		});

		it('scissors is beaten by rock', function (){
			rules = new Rules();
			expect(rules.compare(scissors, rock)).toEqual(rock);
		});

		describe('types of gestures', function () {
			it('rock', function() {
				expect(rock.gesture).toEqual("Rock")
			});
		});
	});
});