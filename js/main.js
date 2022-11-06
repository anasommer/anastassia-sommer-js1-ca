// NYT Best Sellers books API url with a key
const apiKey = `yjKq4yraOdoP9mrRWUQAko5lIqBiDeX3`;
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const books = result.results.books;
    console.log(books);
  } catch (error) {
    console.log(error);
  }
}

getData();

// display 3 different properties: author, title, rank(same as id)
