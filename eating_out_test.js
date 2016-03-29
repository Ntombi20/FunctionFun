QUnit.test("find the out what team ate and drank", function(assert) {
	var team = teamEatingOut("Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's");

	var expectedPlaces = [
	  {
	    "food": "burgers",
	    "noOfItem": 8
	  },
	  {
	    "food": "beers",
	    "noOfItem": 17
	  },
	  {
	    "food": "fanta's",
	    "noOfItem": 11
	  }
	]
	
	assert.deepEqual(team, expectedPlaces);
	})


QUnit.test("how much it cost", function(assert) {

	var expectedCost = [
		{
		    "food": "burgers",
		    "cost": 37
		},
		{
			"food": "beers",
			"cost": 12
		},
		{
			"food": "fanta's",
			"cost": 9
		}
	]

	assert.deepEqual(prices("Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's - 9"), expectedCost);
})


