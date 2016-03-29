function teamEatingOut(eatingOutString){

	var out = eatingOutString
		.split(".").slice(1);

	   var foodList = [];
       for (var n = 0; n < out.length; n++) {
            var teamEat = out[n];
    	   
            var foodString = teamEat
                .replace(" Your team ate ", "")
                .replace(" drank ", "")
                .replace(" and ", ",")
                .split(",");
        }
        // add loop
        for (var i = 0; i < foodString.length; i++) {
            foodString[i]
            
            var item = foodString[i].split(" ");

            var food = item[1];

            var noOfItem = Number(item[0]);

            foodList.push({
                    noOfItem: noOfItem,
                    food: food
            })

           
        } 
         console.log(foodList)          
	return foodList;
}
