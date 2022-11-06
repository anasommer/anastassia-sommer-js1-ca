// NYT Best Sellers books API url with a key
const apiKey = `yjKq4yraOdoP9mrRWUQAko5lIqBiDeX3`;
const url = `https://api.nytimes.com/sv/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;

const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const books = result.results.books;
    container.classList.remove("lds-default");
  } catch (error) {
    container.classList.remove("lds-default");
    container.classList.add("error");
    container.innerHTML = `<div>Sorry, something went wrong. Try to reload a page.</div>`;
    console.log(error);
  }
}

getData();

// display 3 different properties: author, title, rank(same as id)
