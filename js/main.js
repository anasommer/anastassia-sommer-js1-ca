const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;

const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;

    container.classList.remove("lds-default");
    container.innerHTML = "";

    const drinksToShow = 10;

    // display 3 different properties: id, name, image
    for (let i = 0; i < drinks.length; i++) {
      if (i === drinksToShow) {
        break;
      }
      container.innerHTML += `<div>
      <h3> ${i + 1} - <a href="details.html?id=${drinks[i].idDrink}">${
        drinks[i].strDrink
      }</a></h3>
      <img src="${drinks[i].strDrinkThumb}" alt="${drinks[i].strDrink}">
      </div>`;
    }
  } catch (error) {
    container.classList.remove("lds-default");
    container.classList.add("error");
    container.innerHTML = `<div>Sorry, something went wrong. Try to reload a page.</div>`;
  }
}

getData();
