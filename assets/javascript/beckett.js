var dietArray = ["403^Paleo", "386^Vegan", "406^Ketogenic", "390^Pescetarian", "387^Lacto-ovo vegetarian"]

var allergiesArray = ["393^Gluten-Free", "394^Peanut-free", 
"396^Dairy-Free", "395^Tree Nut-Free", "392^Wheat-Free", "397^Egg-Free", "399^Sesame-Free", "398^Seafood-Free"]

var cuisineArray = ["American", "Italian", "Asian", 
"Mexican", "Barbeque", "Swedish"]

var peanutAllergy = false;

var ingredientsArray = [""]

function resulthealth(cuisineArray) {
    var text = "";
    for (i = 0; i < cuisineArray.length; i++) { 
        text += "&allowedCuisine[]=" + cuisineArray[i];
    }
    return text;
}
function resulthealth(dietArray) {
    var text = "";
    for (i = 0; i < dietArray.length; i++) { 
        text += "&allowedDiet[]=" + dietArray[i];
    }
    return text;
}

function resulthealth(allergiesArray) {
    var text = "";
    for (i = 0; i < allergiesArray.length; i++) { 
        text += "&allowedAllergy[]=" + allergiesArray[i];
    }
    return text;
}

function resulthealth(ingredientsArray) {
    var text = "";
    for (i = 0; i < ingredientsArray.length; i++) { 
        text += "&allowedIngredient[]=" + ingredientsArray[i];
    }
    return text;
}

// app ID: 23c56a38
// app key 404c3b636f09a6a81ea04ee17031d1d7

"http://api.yummly.com/v1/api/recipes?_app_id=23c56a38&_app_key=404c3b636f09a6a81ea04ee17031d1d7&q=" + food + 
"&requirePictures=true" + allergy 

// Dairy, Egg, Gluten, Peanut, Seafood, Sesame, Soy, Sulfite, Tree Nut, Wheat
// http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup
// &allowedDiet[]=390^Pescetarian&allowedDiet[]=388^Lacto vegetarian
// Lacto vegetarian, Ovo vegetarian, Pescetarian, Vegan, Vegetarian
// http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup
// &allowedCuisine[]=cuisine^cuisine-american
// American, Italian, Asian, Mexican, Southern & Soul Food, French, 
// Southwestern, Barbecue, Indian, Chinese, Cajun & Creole, English, 
// Mediterranean, Greek, Spanish, German, Thai, Moroccan, Irish,
//  Japanese, Cuban, Hawaiin, Swedish, Hungarian, Portugese


// database for allergies and diets
// http://api.yummly.com/v1/api/metadata/diet?_app_id=23c56a38&_app_key=404c3b636f09a6a81ea04ee17031d1d7
// http://api.yummly.com/v1/api/metadata/allergy?_app_id=23c56a38&_app_key=404c3b636f09a6a81ea04ee17031d1d7
$(document).ready(function(){

    var allergies = ["peanut-free", "vegetarian", "vegan"]
    
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

        
        
    });
});
