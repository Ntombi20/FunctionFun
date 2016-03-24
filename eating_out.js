function teamEatingOut(eatingOutString){

	var out = eatingOutString
		.split(".").slice(1);

	   var outList = [];
	   for(var i=0; i<out.length; i++){
	   var food = out[i]; 

       var foodString = food
            .replace(" Your team ate ", "")
            .replace(" drank ", "")
            .replace(" and ", ",")
            .split(",")
        } 
            for (var n = 0; n < foodString.length; n++) {
                var newString = foodString[n].split(" ");
                console.log(foodString[n].split(" "));
            }     
        // var item1 = foodString[0].split(" ");
        // var item2 = foodString[1].split(" "); 
        // var item3 = foodString[2].split(" ");    
         
        // var noOfItem = Number(item1[0])
        //                // Number(item2[0])
        //                // Number(item3[0]); 
        
        // var foods = item1[1]
        //             // item2[1]
        //             // item3[1];        
       
        // outList.push({
        //     setOfItem: setOfItem,
        //     foods: foods
        
         
	return outList;
}

