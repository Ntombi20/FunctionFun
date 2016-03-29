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
	return foodList;
}

function prices(pricesString){

    var string = pricesString.split(":").slice(1);

    var priceList = [];
    for (var i = 0; i < string.length; i++) {
        var newSting = string[i]
            .replace("each", "")
            .trim()
            .split(", ");   
    }

    for (var i = 0; i < newSting.length; i++) {
        newSting[i]

        var itemNdCost = newSting[i].split(" - ");

        var food = itemNdCost[0];

        var cost = Number(itemNdCost[1]);

        priceList.push({
            food: food,
            cost: cost
        })
    }
    
    return priceList;
}





















// var prices = costString
//             .split("R").join(" ").split(" ").slice(" ");
            
//          console.log(prices);

//         var cost1 = Number(prices[1]); 
//         var cost2 = Number(prices[2]);
//         var cost3 = Number(prices[3]);

//         var AllCost = (cost1 * 3) + (cost2 * 3) + (cost3 * 3);
//         costList.push(
//             AllCost
//             );