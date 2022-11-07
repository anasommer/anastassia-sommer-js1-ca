const detailsContainer = document.querySelector(".details");
const heading = document.querySelector("#coctail-heading");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

async function showCoctailDetails() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const drink = result.drinks[0];

    createHtml(drink);
  } catch (error) {
    detailsContainer.classList.remove("lds-default");
    detailsContainer.innerHTML = message("error", error);
  }
}

// display 3 different properties: name, image, instructions
function createHtml(drink) {
  updateElement(detailsContainer, "lds-default");

  document.title = drink.strDrink;
  heading.textContent = `${drink.strDrink}`;

  detailsContainer.innerHTML = `<div>
                                    <img src="${drink.strDrinkThumb}" alt="${
    drink.strDrink
  }">
                                    <ul>Ingredients:
                                     ${createListOfIngredients(drink)}</ul>
                                    <p>${drink.strInstructions}</p>
                                </div>`;
}

function createListOfIngredients(drink) {
  const maxNumberOfIngredients = 10;
  console.log(drink);
  let listOfIngredients = "";

  for (let i = 1; i < maxNumberOfIngredients; i++) {
    if ("strIngredient" + i in drink) {
      const ingredient = drink["strIngredient" + i];
      ingredient ? (listOfIngredients += `<li>${i}: ${ingredient}</li>`) : "";
    }
  }
  return listOfIngredients;
}

showCoctailDetails();
