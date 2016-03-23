function teamEatingOut(eatingOutString){

	var out = eatingOutString
		.split(".").slice(1);

	   var outList = [];
	   for(var i=0; i<out.length; i++){
	   var food = out[i] 

       var foodString = food
            .replace(" Your team ate ", "")
            .replace(" drank ", "")
            .replace(" and ", ",")
            .trim();

        var item = foodString
            .split(",");
            console.log(item);
       
        // var foodName = [1];
        // if (isNaN(foodParts[0])){
        //     foodName = foodParts[1] + " " + foodParts[1];
        // }
        // var noOfItem = parseInt(foodParts[foodParts.length]);


 //        outList.push({
 //          food : foodName,
 //          noOfItem : noOfItem
 //        })
        }

	return outList;
};

