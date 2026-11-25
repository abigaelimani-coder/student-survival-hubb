// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";

    localStorage.setItem("studentTheme", isDark ? "dark" : "light");

});

// Load saved theme
const savedTheme = localStorage.getItem("studentTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
}


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";

    });

});


// =========================
// DAILY REMINDER
// =========================

const quotes = [
    "You don't have to have everything figured out today.",
    "Small steps still move you forward.",
    "Your progress matters, even when nobody sees it.",
    "Give yourself permission to learn at your own pace.",
    "A fresh start can begin at any moment.",
    "Keep showing up for the future you're building."
];

const dailyQuote = document.getElementById("dailyQuote");

// Choose a reminder based on the day
const today = new Date();
const quoteIndex = today.getDate() % quotes.length;

dailyQuote.textContent = quotes[quoteIndex];

 
