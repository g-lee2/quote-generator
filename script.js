let apiQuotes = [];

// Show New Quote 
// function newQuote() {
//   // Pick a random quote from apiQuotes array
//   const quote = localQuotes[Math.floor(Math.Random() * apiQuotes.length)];
//   console.log(quote);
// }

function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.Random() * apiQuotes.length)];
  console.log(quote);
}

//Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();

// newQuote();
