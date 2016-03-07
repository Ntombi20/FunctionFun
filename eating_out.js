function teamEatingOut(eatingOutString){

	var out = eatingOutString
		.split(".")
		.slice(1);

	var outList = [];
	for(var i=0; i<out.length; i++){
		var outEating = out[i];

		var eatingString = outEating
	 		.replace("Your team ate", "")
            .replace(",", "")
            .replace("drank", "")
            .replace("and", "")
            .trim();

        var foodParts = eatingString.split(" ");
        console.log(foodParts);

        var foodName = foodParts[1];
        if (isNaN(foodParts[0])){
            foodName = foodParts[1] + " " + foodParts[1];
        }
        var noOfItem = Number(foodParts[foodParts.length-1]);


        outList.push({
          food : foodName,
          noOfItem : noOfItem
        })
    }

	return outList;
};

