/* =========================================
   MOTIVATION LOUNGE JAVASCRIPT
   Makes the page interactive
========================================= */

// 1. DAILY MOTIVATIONAL QUOTES
const quotes = [
    {
        text: "You do not have to be perfect to make progress.",
        author: "A reminder for you"
    },
    {
        text: "Small steps every day lead to meaningful change.",
        author: "Keep going"
    },
    {
        text: "Your future is built by what you do today.",
        author: "A little encouragement"
    },
    {
        text: "You are capable of learning things that once felt impossible.",
        author: "Believe in yourself"
    },
    {
        text: "Do not compare your chapter one to someone else's chapter ten.",
        author: "Trust your journey"
    },
    {
        text: "Rest is part of the process. You are allowed to pause.",
        author: "A gentle reminder"
    }
];

// Gets the quote elements from HTML
const dailyQuote = document.getElementById("daily-quote");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("new-quote-btn");

// Changes the quote when the button is clicked
if (quoteButton) {
    quoteButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        dailyQuote.textContent = quotes[randomIndex].text;
        quoteAuthor.textContent = quotes[randomIndex].author;
    });
}


// 2. RESET CORNER
const resetMessages = [
    "Take a deep breath. You can approach one thing at a time.",
    "Step away for a moment, drink some water, and give yourself a little space.",
    "You do not need to figure everything out right now.",
    "Choose one small task. Start there. That's enough for now.",
    "A difficult day does not erase all the progress you have made."
];

const resetButton = document.getElementById("reset-btn");
const resetMessage = document.getElementById("reset-message");

// Gives a new encouraging message
if (resetButton) {
    resetButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * resetMessages.length);

        resetMessage.textContent = resetMessages[randomIndex];
    });
}


// 3. DAILY CHALLENGE
const challenges = [
    "Write down one thing you want to accomplish today.",
    "Spend ten minutes reviewing something you learned.",
    "Encourage someone who might need a kind word.",
    "Organise your study space.",
    "Write down one thing you are grateful for.",
    "Learn one new word and use it in a sentence.",
    "Take a short break away from your screen.",
    "Read a few verses from the Bible and reflect on them."
];

const challengeButton = document.getElementById("challenge-btn");
const dailyChallenge = document.getElementById("daily-challenge");

// Gives a new small challenge
if (challengeButton) {
    challengeButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * challenges.length);

        dailyChallenge.textContent = challenges[randomIndex];
    });
}


// 4. DARK MODE
// Uses the same theme setting as the other website pages
const savedTheme = localStorage.getItem("studentTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

 
