const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

// async showCoctailDetails() {
//     try {

//     } catch(error) {
//         detailsContainer.classList.remove("lds-default");
//         detailsContainer.classList.add("error");
//         detailsContainer.innerHTML = `<div>Sorry, something went wrong. Try to reload a page.</div>`;
//     }
// }
