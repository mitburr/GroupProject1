// ------------------------------------------------------------------------ //
$(document).ready(function () {

  $("#ingredientsListHeading").hide();
  $("#winePairingHeading").hide();
  $("#winePricingHeading").hide();

  // ---------------- Start of Ajax call function--------------- //
  function getfoodNames(recipeName) {


    var foodNameListURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/queries/analyze?q=" + recipeName;
    console.log("tfoodNameListURL",foodNameListURL);
    // Performing an AJAX request with the foodNameListURL
    $.ajax({
      url: foodNameListURL,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84b7f3975dmshf1a2fdc786671cap19ac4fjsn5bb2b98f52e9"
      }
    })
      .then(function (response) {
        var foodNameList = [];

        if (response.cuisines.length > 0) {
          $.each(response.cuisines, function (index, value) {
            foodNameList.push(value.name);
          });
        }
        else if (response.dishes.length > 0) {
          $.each(response.dishes, function (index, value) {
            foodNameList.push(value.name);
          });
        }
        else if (response.ingredients.length > 0) {
          $.each(response.ingredients, function (index, value) {
            foodNameList.push(value.name);
          });
        }
        else {
          console.log("there is no wine paired for with this dish");
        }

        if (foodNameList.length > 0) {

          winePairingAjaxcall(foodNameList);
        }
      });
  }

  function winePairingAjaxcall(foodNameList) {
    var winePaired = false;
    

    $.each(foodNameList, function (index, value) {
      if (!winePaired) {
        console.log("value",value);
        value = (value.toLowerCase()).replace(/\-/g, '');
        var winePairingURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=" + value;
        
        console.log("winePairingURL",winePairingURL);
        // Performing an AJAX request with the foodNameListURL
        $.ajax({
          url: winePairingURL,
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "84b7f3975dmshf1a2fdc786671cap19ac4fjsn5bb2b98f52e9"
          }
        })
          .then(function (response) {
            console.log("response", response);
            if((!response.status) &&  (response.pairingText != ""))
            {
              //winePairingList
                winePaired = true;
                 $("#winePairingHeading").show();
                 $("#winePairingList").empty();
                 $("#winePairingList").append("<tr class=''><td> Wines : </td><td> "+ (response.pairedWines).join(' * ') + "</td></tr>");
                 $("#winePairingList").append("<tr><td> Message : </td><td>"+ response.pairingText + "</td></tr>");
                 
                 if(response.productMatches.length>0)
                 { 
                  $("#winePricingHeading").show();
                  $("#winePrincingList").empty();
                    $("#winePrincingList").append("<tr><td> Wine Title: </td><td> "+ response.productMatches[0].title + "</td></tr>");
                    $("#winePrincingList").append("<tr><td> Wine Description: </td><td> "+ response.productMatches[0].description + "</td></tr>");
                    $("#winePrincingList").append("<tr><td> Wine Price: </td><td> "+ response.productMatches[0].price + "</td></tr>");
                    $("#winePrincingList").append("<tr><td> Wine shopping URL: </td><td><a target='_blank' href='"+ response.productMatches[0].link + "'>"+  response.productMatches[0].link+ "</a></td></tr>");
                    $("#winePrincingList").append("<tr><td> Wine Image: </td><td> <img src='"+ response.productMatches[0].imageUrl + "'/></td></tr>");
                  }


            }
            


          });
      }
    });

   
  }

  $("#placeholderRecipeDisplay2 div").on("click", function () {

    $("#ingredientsList").empty();
    var clickedId = $(this).attr("id");
    var recipeNameId = "#recipeName_" + clickedId;
    var ingredientsListId = "#ingredientsList_" + clickedId;
    var recipeName = $(recipeNameId).text();
    var ingredientsList = ($(ingredientsListId).text()).split(",");
    if (ingredientsList.length > 0) {
      $("#ingredientsListHeading").show();
      for (index in ingredientsList) {
        var tableRow = $("<tr>");
        tableRow.append("<td> <input type='checkbox' id='" + ingredientsList[index] + "'/> </td>");
        tableRow.append("<td>" + ingredientsList[index] + "</td>");
        $("#ingredientsList").append(tableRow);
      }
    } //  $("#checkboxList").append(checkboxList);
    
   getfoodNames(recipeName);
  });

});
