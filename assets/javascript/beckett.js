function resulthealth(allergyArray) {
    var text = "";
    for (i = 0; i < allergyArray.length; i++) { 
        text += "&health=" + allergyArray[i];
    }
    return text;
}

$(document).ready(function(){
    var allergies = ["peanut-free", "vegetarian", "vegan"]
    // var allergies = ["peanut-free",]
    // var allergies = []
    $("#display-images").empty();
    var input = "chicken";

    var allergyQuery = resulthealth(allergies)

    console.log(allergyQuery)
    
    // $(this).attr("data-name");
    
    var queryURL = "https://api.edamam.com/search?q=" + input + "&app_id=e6bc4abb&app_key=31a3bab6923136401b1d77da09b16631&from=0&to=10" + allergy1 + allergy2 + allergy3 + allergy4;
//application ID =  e6bc4abb 
// application keys = 31a3bab6923136401b1d77da09b16631
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).done(function(response) {

        
        // for(var j = 0; j < limit; j++) {    

        //     var displayDiv = $("<div>");
        //     displayDiv.addClass("holder");
        
        //     var image = $("<img>");
        //     image.attr("src", response.data[j].images.original_still.url);
        //     image.attr("data-still", response.data[j].images.original_still.url);
        //     image.attr("data-animate", response.data[j].images.original.url);
        //     image.attr("data-state", "still");
        //     image.attr("class", "gif");
        //     displayDiv.append(image);

        //     var rating = response.data[j].rating;
        //     console.log(response);
        //     var pRating = $("<p>").text("Rating: " + rating);
        //     displayDiv.append(pRating)

        //     $("#display-images").append(displayDiv);
            console.log(response)
        // }
    });
});
