QUnit.test("find the out what team ate and drank", function(assert) {

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

		assert.equal(teamEatingOut("Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's"), expectedPlaces);
	});

