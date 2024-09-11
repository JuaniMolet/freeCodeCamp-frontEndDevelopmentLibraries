document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("text").innerText = `"${quote.text}"`;
    document.getElementById("author").innerText = `— ${quote.author}`;

    const tweetQuote = document.getElementById("tweet-quote");
    const tweetText = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
    tweetQuote.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
  }

  document.getElementById("new-quote").addEventListener("click", displayQuote);

  displayQuote();
});
