let cardAttributes ={
    title : 'test',
    description: 'test',
    src: 'assets/images/Placeholder_Image_400x200_px.png',
}

let cardsDiv = $("#cardsDiv");
let cardCreate = function(cardAttributes){
    let newCard = $("<div class='card bg-dark text-white'>");
    let  cardImage = $("<img src='assets/images/Placeholder_Image_400x200_px.png' class='card-img'>");
    let cardImageOverlayDiv = $("<div class='card-img-overlay'>" );
    let cardTitle = $("<h5 class='card-title'>");
    let cardDescription = $("<p class='card-text'>");
    cardImage.attr("src", cardAttributes.src);
    cardTitle.text(cardAttributes.title);
    cardDescription.text(cardAttributes.cardDescription);
    cardImageOverlayDiv.append(cardTitle);
    cardImageOverlayDiv.append(cardDescription);
    newCard.append(cardImage);
    newCard.append(cardImageOverlayDiv);
    cardsDiv.append(newCard);
}
cardCreate(cardAttributes);
cardCreate(cardAttributes);
cardCreate(cardAttributes);
