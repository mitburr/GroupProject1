let data = JSON.parse(sessionStorage.getItem('apiCallResults'));
console.log(data.matches);

// Shanki added harcoded data from yummly for testing
/* var results = [
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/ZmsASm2juGUIlIefA60n2NnXzwRsDeWRJgqqmPQKhUk-K8IA0SGahqnu2IovUEF_lOegwk9N9UjRck8aQxxh2ho=s90-c"
        },
        "sourceDisplayName": "Fit Mom Journey",
        "ingredients": [
            "chicken breasts",
            "seasoning",
            "cream cheese",
            "bacon"
        ],
        "id": "Slow-Cooker-Crack-Chicken-2639145",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/uEJvS5UKLlicMf5UDbxdksZ7QKQd6ywRdrzuGqBx66ZNKegg_GZ03zi0o07GR3xwdFm8_Dh1NAYqiDwS_bs7=s90"
        ],
        "recipeName": "Slow Cooker Crack Chicken",
        "totalTimeInSeconds": 29700,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": null,
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "http://lh5.ggpht.com/UwNbjIdEdFmkETuO0pjnBvhuPkgXVskHco3qA5lV1xInenr6jiXt3zljBt9-TptV_oi-xcG_TQuS3dltp-gURQ=s90-c"
        },
        "sourceDisplayName": "Witty in the City",
        "ingredients": [
            "chicken thighs",
            "dijon mustard",
            "maple syrup",
            "rice vinegar",
            "fresh rosemary",
            "salt",
            "pepper"
        ],
        "id": "Man-Pleasing-Chicken-608913",
        "smallImageUrls": [
            "http://lh4.ggpht.com/gInMhsmcQ708LZAw4ryeheSm6cOuvDtlzpHpbrE1RW01kYudZlWoRBcEiS-gj_2mj_8Xdl-dzgNY2CJxbHbT=s90"
        ],
        "recipeName": "Man-Pleasing Chicken",
        "totalTimeInSeconds": 3300,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": null,
        "rating": 3
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/lZePtEa3lwMgTsKWFwHKEYx38DqfWBO1Sd7SjbfPrAOhaKauClyVbN0rGEM3PvBTwdyxygiEIRvDU45-lnabidQ=s90-c"
        },
        "sourceDisplayName": "Going My Wayz",
        "ingredients": [
            "lemon",
            "olive oil",
            "skinless, boneless chicken breast halves",
            "garlic",
            "unsalted chicken stock",
            "cream of celery soup",
            "baby spinach"
        ],
        "id": "Lemon-Chicken-Scallopini-With-Spinach-2594925",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/ZcOm5mZVh71HUnEk84bqyCztpZyAptVjMzR_bQo7Sa6En8Sd_dDQ5OKJT2TEgUrWUuA6QU7KUkWiJ8X2ukZa=s90"
        ],
        "recipeName": "Lemon Chicken Scallopini With Spinach",
        "totalTimeInSeconds": 1500,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": {
            "piquant": 0,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/TSBIrjNcVPgUn3LKBVIiQb1AA3T5Ei_47JTIVcfr0Q6j9627PhByi9451rw6RIU8rtAD9uIZt8UWYN50FkTbXA=s90-c"
        },
        "sourceDisplayName": "Plain Chicken",
        "ingredients": [
            "bbq sauce",
            "italian dressing",
            "boneless chicken breasts"
        ],
        "id": "Three-Ingredient-Italian-BBQ-Chicken-2592658",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/opnoS7pQbEsYeR4el701Jv2DPpqkf5o2qOUOCtZviyxGWjIzTyke9PBXcY35q59wsEHLnQO8-1VBAEqIJvMYcg=s90"
        ],
        "recipeName": "Three Ingredient Italian BBQ Chicken",
        "totalTimeInSeconds": 1800,
        "attributes": {
            "course": [
                "Main Dishes"
            ],
            "cuisine": [
                "Barbecue",
                "Italian"
            ]
        },
        "flavors": {
            "piquant": 0,
            "meaty": 0.6666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0.5,
            "sour": 0.16666666666666666,
            "salty": 0.8333333333333334
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/125GvuwNbapAqI8xp392zhpGJ_sL_WDO1IxFV-4xSdZHKKSSl__xM35Uq-1QD2iuS4Gi8hnveWR2WkaXT57h=s90-c"
        },
        "sourceDisplayName": "Plain Chicken",
        "ingredients": [
            "spaghetti",
            "cream of chicken soup",
            "velveeta cheese",
            "chicken broth",
            "ranch dressing mix",
            "chicken",
            "bacon bits",
            "shredded cheddar cheese"
        ],
        "id": "Crack-Chicken-Spaghetti-2572120",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/i7ddbz2aAJ82gO6IrW-Zjk95i0dBG6Cx6LgQuN2wrTZs1G3UUrseflbhdJ0r1pLPA8kCPqw9pd4qi0v4ehGb=s90"
        ],
        "recipeName": "Crack Chicken Spaghetti",
        "totalTimeInSeconds": 3300,
        "attributes": {
            "course": [
                "Main Dishes"
            ],
            "cuisine": [
                "Kid-Friendly"
            ]
        },
        "flavors": null,
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/nyb3_eajRBv2IeAsmmcrEXd0lA6XgHkIcNPq2UzivNGDQkqWNAsb0kK7FwUsr6dgsQRjFWltrMKodlwL2v4FoA=s90-c"
        },
        "sourceDisplayName": "Bunny's Warm Oven",
        "ingredients": [
            "chicken wings",
            "soy sauce",
            "water",
            "brown sugar",
            "dry mustard",
            "ground ginger",
            "garlic cloves"
        ],
        "id": "Teriyaki-Chicken-Wings-2359423",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/GAU1YZQR_6ULgpi9pZFhFEv6zto5iGPwDryEreU-TGCoYDd-DWBv6etETJLt35uiFwJUAMXtg8a7qCXaXHZYCQ=s90"
        ],
        "recipeName": "Teriyaki Chicken Wings",
        "totalTimeInSeconds": 4200,
        "attributes": {
            "course": [
                "Appetizers",
                "Lunch"
            ]
        },
        "flavors": {
            "piquant": 0.16666666666666666,
            "meaty": 0.6666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0.5,
            "sour": 0.16666666666666666,
            "salty": 0.8333333333333334
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/KX3rFx4a75fLbBVozKkdPAkCAhBBquiY8z_1J8eoXRcZWjlZ759OsqOBq__MyNHXuFOG0YQmSgiBfdphgriw=s90-c"
        },
        "sourceDisplayName": "Cookies & Cups",
        "ingredients": [
            "sour cream",
            "garlic powder",
            "seasoned salt",
            "fresh ground black pepper",
            "grated parmesan cheese",
            "boneless chicken breasts"
        ],
        "id": "Melt-In-Your-Mouth-_MIYM_-Chicken-Breasts-2530205",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/k0-dM2pyRUGe1LuSYRKaUfJrgy6Tp4V_tp7tUreSSPkdPyS3CfkFySn9-oRh7WEkGfpMQ1QEVFA853Dnk5zDRg=s90"
        ],
        "recipeName": "Melt In Your Mouth (MIYM) Chicken Breasts",
        "totalTimeInSeconds": 1800,
        "attributes": {
            "course": [
                "Main Dishes"
            ],
            "cuisine": [
                "Kid-Friendly"
            ]
        },
        "flavors": {
            "piquant": 0,
            "meaty": 0.8333333333333334,
            "bitter": 0.8333333333333334,
            "sweet": 0.16666666666666666,
            "sour": 0.16666666666666666,
            "salty": 0.6666666666666666
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/pgFGy1_gVJ8-Pco_y7Sr2pUwqiBLPyA2lQPpaX3vIvJ-MYFDVfluqV77cEUdj7qhzNRh6Oibx1mG48aJcOlEfg=s90-c"
        },
        "sourceDisplayName": "Lil' Luna",
        "ingredients": [
            "olive oil",
            "lemons",
            "minced garlic",
            "kosher salt",
            "freshly ground black pepper",
            "green beans",
            "small red potatoes",
            "boneless, skinless chicken breasts"
        ],
        "id": "Lemon-Chicken-With-Veggies-2607620",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/IW7qTbCi8t5NKEVOed4UdYYFPvrhrpPtb7w5UC2fTldzLG6EwgfNSibv99gyfl-6leAUMXcqVdcdfmdcoHnbzg=s90"
        ],
        "recipeName": "Lemon Chicken With Veggies",
        "totalTimeInSeconds": 5100,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": {
            "piquant": 0,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "http://lh3.googleusercontent.com/pthsbJGTcucLB8ztsE88-t0LDhLrd_779GOjDswbnl9KOvfexmtTWMorIDlCjShuF00wrpEnsXYHtwCVQnyR=s90-c"
        },
        "sourceDisplayName": "Little Spice Jar",
        "ingredients": [
            "butter",
            "olive oil",
            "boneless skinless chicken breasts",
            "salt",
            "black pepper",
            "onions",
            "cremini mushrooms",
            "roasted garlic",
            "balsamic vinegar",
            "red pepper flakes",
            "thyme",
            "water",
            "chives"
        ],
        "id": "Balsamic-Chicken-With-Mushrooms-and-Thyme-2504911",
        "smallImageUrls": [
            "http://lh3.googleusercontent.com/UbF0K8gOdWXYkeamVd8IEbufctniE5vyBAmZ9PT5yGrU8Zc9BxPN1A78lXCL__8o_-3SDn6yNLLQibRGH_I19w=s90"
        ],
        "recipeName": "Balsamic Chicken With Mushrooms and Thyme",
        "totalTimeInSeconds": 3600,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": {
            "piquant": 0.3333333333333333,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
        },
        "rating": 4
    },
    {
        "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/H1neT4HeYVGzBZ-WgPgUqO3iX9W9fdGVEm-yKTg8mTS6p62yvl4qi83_-V8QlnZQVWSkBMNJVib8u0jst7u4=s90-c"
        },
        "sourceDisplayName": "Went Here, 8 This",
        "ingredients": [
            "chicken legs",
            "lime",
            "honey",
            "sea salt",
            "jalapeno",
            "minced garlic",
            "apple cider vinegar"
        ],
        "id": "Spicy-Baked-Honey-Chicken-Thighs-2629778",
        "smallImageUrls": [
            "https://lh3.googleusercontent.com/Iynltq0vXeGxT6lpR5mobX-RjgNZktNrp8j7IddnAfGyC2Lag_UApV5ln1yM_ri221jWqb5pjxiqyuw1LUXmuBI=s90"
        ],
        "recipeName": "Spicy Baked Honey Chicken Thighs",
        "totalTimeInSeconds": 3300,
        "attributes": {
            "course": [
                "Main Dishes"
            ]
        },
        "flavors": {
            "piquant": 0.6666666666666666,
            "meaty": 0.6666666666666666,
            "bitter": 0.6666666666666666,
            "sweet": 0.16666666666666666,
            "sour": 0.16666666666666666,
            "salty": 0.8333333333333334
        },
        "rating": 4
    }];
 */
$(document).ready(function () {

    $("#search-button").on("click", function () {
        console.log(data)
        displayRecipes(data);
    });
})

//Displays recipes based on API call
//Display Recipe API Call http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7
//Specific display receipe API call is a seperate function and not needed at this time for our uses
//Using info generated by original API call
function displayRecipes(data) {
    console.log(data)
    $("#placeholderRecipeDisplay2").empty();
    var results = data.matches;
    for (var i = 0; i < results.length; i++) {
        var recipeID = "<div class='recipeID'> Recipe ID: " + (results[i].id) + " </div>";
        var image = '<img src= " ' + results[i].imageUrlsBySize[90].slice(0, -6)
            + '" class="recipeImages text-center w-50">'
            + recipeID;

        image2 = "<div class='border border-dark mt-2' id='" + results[i].id + "'>" + image + "</div>";
        $('#placeholderRecipeDisplay2').append(image2);
        var recipeName = "<p hidden id='recipeName_"+ (results[i].id)+"'>" + (results[i].recipeName) + " </p>";
        var ingredientsList = "<p hidden id='ingredientsList_"+ (results[i].id)+"'>" + (results[i].ingredients) + " </p>";
        $('#placeholderRecipeDisplay2').append(recipeName);
        $('#placeholderRecipeDisplay2').append(ingredientsList);
        sessionStorage.removeItem('apiCallResults');
        sessionStorage.clear();
    }
}

// window.onload = (function() {
//     console.log (data)
//     displayRecipes(data);
//   });
function onLoadFunction() {
    displayRecipes(data);
}
