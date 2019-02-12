
//IDEA: an add button in the search field that will push to an array, array will auto fill API
var ingredientsArray = [];

$(document).ready(function (){
    console.log(ingredientsArray);
    //on click function for adding ingredients to array
    $("#placeholderAddButton").on("click", function () {
        console.log("Button Clicked");
        var userInput = $('#placeholderIngredientField').val();
        // if (userInput) {
            ingredientsArray.push(userInput)
        // }
        $("#buttonGenerator")[0].reset()
        console.log(ingredientsArray);
    });
    

    //testing Yummly API call
    $("#placeholderSearchRecipeButton").on("click", function () {
        
        var ingredientsArrayOutput = ingredientsArray.join('+');
        
        console.log(ingredientsArrayOutput)
        searchRecipe(ingredientsArrayOutput);
    });

    //API call the search results.
    // Yummly API Key 404c3b636f09a6a81ea04ee17031d1d7
    function searchRecipe(ingredientsArrayOutput) {

        var queryURL = "https://api.yummly.com/v1/api/recipes?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7&q=" + ingredientsArrayOutput;
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
            
        })
            .done(function (response) {
                console.log(response)
                displayRecipes(response);
            })
    }
    
    //Display Recipes will give search results when completed correctly
    //Displays recipes
    //response data is set up for Giphy API and will need to be modified to work with the correct API
    //Display Recipe API Call http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7
    //OR use recipe ID and fill out URL

    function displayRecipes(response) {
        $("#placeholderRecipeDisplay").empty();
        var results = response.matches;
        for (var i = 0; i < results.length; i++) {
            var recipeID = "<div class='recipeID'> Recipe ID: " + (results[i].id) + " </div>";
            var image = '<img src= " ' + results[i].imageUrlsBySize[90].slice(0,-6) 
                + '" class="recipeImages" style= "width:380px;">'
                + recipeID;
    
            image2 = "<div class='col-md-4'>" + image + "</div>";
            $('#placeholderRecipeDisplay').append(image2);
        }
    }
})
