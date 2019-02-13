




















// let recipe = {
//     title: 'test',
//     description: 'test',
//     src: 'assets/images/Placeholder_Image_400x200_px.png',
//     ingredients: [
//         'tofu',
//         'rice',
//         'gizzard',
//         'bulletssssssssss'
//     ]
// }

// let cardsDiv = $("#cardsDiv");
// let cardCreate = function (recipe) {
//     let newCard = $("<div class='card bg-dark text-white'>");
//     let cardImage = $("<img src='assets/images/Placeholder_Image_400x200_px.png' class='card-img'>");
//     let cardImageOverlayDiv = $("<div class='card-img-overlay'>");
//     let cardTitle = $("<h5 class='card-title'>");
//     let cardDescription = $("<p class='card-text'>");
//     cardImage.attr("src", recipe.src);
//     cardTitle.text(recipe.title);
//     cardDescription.text(recipe.cardDescription);
//     cardImageOverlayDiv.append(cardTitle);
//     cardImageOverlayDiv.append(cardDescription);
//     newCard.append(cardImage);
//     newCard.append(cardImageOverlayDiv);
//     cardsDiv.append(newCard);
// }

// let recipeTitleCreation = function(titleObject){
//     $("#titleImage").attr("src", titleObject.src);
//     $('#title').text(titleObject.title);
//     $('#description').text(titleObject.description);    
// }

// let createRecipeIngredients = function(ingredients){
//     for( let i = 0; i < ingredients.length; i++){
//         let ingredientItem = $('<li class="list-group-item absolute-left">');
//         ingredientItem.text(ingredients[i]);
//         $("#ingredientsList").append(ingredientItem);
//     }
// }

// createRecipeIngredients(recipe.ingredients);
// recipeTitleCreation(recipe);
// cardCreate(recipe);
// cardCreate(recipe);
// cardCreate(recipe);
