import { useState } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const quotes = [
  {
    id: 1,
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    theme: "#4B9CD3", // Deep Sky Blue
  },
  {
    id: 2,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    theme: "#2E8B57", // Sea Green
  },
  {
    id: 3,
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    theme: "#FFD700", // Gold
  },
  {
    id: 4,
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    theme: "#D2691E", // Chocolate
  },
  {
    id: 5,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    theme: "#4682B4", // Steel Blue
  },
  {
    id: 6,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    theme: "#6A5ACD", // Slate Blue
  },
  {
    id: 7,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    theme: "#006400", // Dark Green
  },
  {
    id: 8,
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
    theme: "#8B008B", // Dark Magenta
  },
  {
    id: 9,
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
    theme: "#B22222", // Firebrick
  },
  {
    id: 10,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    theme: "#2F4F4F", // Dark Slate Gray
  },
  {
    id: 11,
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
    theme: "#800000", // Maroon
  },
  {
    id: 12,
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    theme: "#708090", // Slate Gray
  },
  {
    id: 13,
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    theme: "#483D8B", // Dark Slate Blue
  },
  {
    id: 14,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    theme: "#556B2F", // Dark Olive Green
  },
  {
    id: 15,
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    theme: "#8B0000", // Dark Red
  },
  {
    id: 16,
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
    theme: "#2F4F4F", // Dark Slate Gray
  },
  {
    id: 17,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
    theme: "#5F9EA0", // Cadet Blue
  },
  {
    id: 18,
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    theme: "#7B68EE", // Medium Slate Blue
  },
  {
    id: 19,
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
    theme: "#191970", // Midnight Blue
  },
  {
    id: 20,
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    theme: "#4B0082", // Indigo
  },
];

export default function App() {
  const [randomQuote, setRandomQuote] = useState(
    quotes[Math.floor(Math.random() * 10)]
  );

  function handleClick() {
    setRandomQuote(quotes[Math.floor(Math.random() * 10)]);
  }

  return (
    <div className="App" style={{ backgroundColor: randomQuote.theme }}>
      <div id="quote-box" style={{ color: randomQuote.theme }}>
        <p id="text">
          <BiSolidQuoteLeft /> {randomQuote.quote} <BiSolidQuoteRight />
        </p>
        <p id="author">-{randomQuote.author}</p>
        <div id="bottom">
          <a
            href="twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"
            style={{ backgroundColor: randomQuote.theme }}
          >
            <TiSocialTwitter />
          </a>
          <button
            id="new-quote"
            onClick={handleClick}
            style={{ backgroundColor: randomQuote.theme }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
