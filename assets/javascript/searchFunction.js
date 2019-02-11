// How multiple ingredients are handles will have to be addressed
//IDEA: an add button in the search field that will push to an array, array will auto fill API
var searchPlaceholder;
var searchPlaceholderAdditionalIngredient;
var ingredientsArray = ["chicken", "onions"];

$(document).ready(function (){

    
    console.log(ingredientsArray);
    //function adding ingredients from the search fuction
    //pushes to the  ingredientsArray
    // function addIngredientField() {
    //     var userInput = $('#placeholderIngredientField').val();
    //     ingredientsArray.push(userInput);
    //     console.log(ingredientsArray);
    // }
    
    
    //on click function for adding ingredients to array
    $("#placeholderSubmitButton").on("click", function () {
        console.log("Button Clicked");
        var userInput = $('#placeholderIngredientField').val();
        // if (userInput) {
            ingredientsArray.push(userInput)
        // }
        $("#buttonGenerator")[0].reset()
        console.log(ingredientsArray);
    });
    
    
    //API call the search results.
    //searchPlacehold will be the variable to add into the API call
    //API key and link is placeholder also
    //Display Recipes will give search results
    //search Place
    
    function searchRecipe(searchPlaceholder) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            searchPlaceholder + "&api_key=vWeqA6PcC3xHnWrrZbAf3lPknrmsIrEm&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (response) {
                displayRecipes(response);
            })
    }
    
    //Displays recipes
    //response data is set up for Giphy API and will need to be modified to work with the correct API
    
    function displayRecipes(response) {
        $("#placeholderRecipeDisplay").empty();
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var rating = "<div class='ratings'> Rating: " + (results[i].rating) + " </div>";
            var image = '<img src= " ' + response.data[i].images.fixed_height_still.url
                + '" data-still=" ' + response.data[i].images.fixed_height_still.url
                + ' " data-animate=" ' + response.data[i].images.fixed_height.url
                + '" data-state="still" class="gif" style= "width:380px;">'
                + rating;
    
            image = "<div class='col-md-4'>" + image + "</div>";
            $('#placeholderRecipeDisplay').append(image);
        }
    }
})
