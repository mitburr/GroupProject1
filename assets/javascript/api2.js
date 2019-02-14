//ready function
$(document).ready(function () {

    //Adds ingredients to yummly API and runs Yummly API call
    $("#search-button").on("click", function () {
        var APIcall2 = "French-Onion-Soup-The-Pioneer-Woman-Cooks-_-Ree-Drummond-41364";
        console.log(APIcall2)
        searchRecipe(APIcall2);
    });

    function searchRecipe(APIcall2) {

        var queryURL = "https://api.yummly.com/v1/api/recipe/" + APIcall2 + "?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "json"
        })
            .done(function (response) {
                displayRecipes(response)

            })
        function displayRecipes(response) {
            console.log(response)
            $("#cardsDiv").empty();
            var recipeID = "<a href='" + (response.source.sourceRecipeUrl) + "'target='_blank'>Recipe Link</a>";
            console.log(recipeID)
            $('#cardsDiv').append(recipeID);

        }

        $("#cardsDiv").on("click", function () {


        });
    }
})