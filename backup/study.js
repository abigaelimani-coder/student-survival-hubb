// =========================
// DARK MODE
// Allows users to switch between light and dark themes.
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";

    localStorage.setItem(
        "studentTheme",
        isDark ? "dark" : "light"
    );

});

// Restores the saved theme.
if (localStorage.getItem("studentTheme") === "dark") {

    document.body.classList.add("dark");
    themeToggle.textContent = "☀";

}


// =========================
// MOBILE NAVIGATION
// Controls the navigation menu on phones.
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Closes the menu when a link is selected.
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";

    });

});


// =========================
// FOCUS TIMER
// Creates a 25-minute study countdown.
// =========================

const timerDisplay = document.getElementById("timerDisplay");

const timerMessage = document.getElementById("timerMessage");

const startTimer = document.getElementById("startTimer");

const pauseTimer = document.getElementById("pauseTimer");

const resetTimer = document.getElementById("resetTimer");

// 25 minutes expressed in seconds.
const focusDuration = 25 * 60;

let remainingTime = focusDuration;

let timerInterval = null;


// Displays the countdown in MM:SS format.
function updateTimerDisplay() {

    const minutes = Math.floor(remainingTime / 60);

    const seconds = remainingTime % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

}


// Starts the countdown.
function startCountdown() {

    // Prevents multiple timers from running together.
    if (timerInterval !== null) {
        return;
    }

    if (remainingTime <= 0) {
        return;
    }

    timerMessage.textContent = "You've got this. Stay focused!";

    timerInterval = setInterval(function () {

        remainingTime--;

        updateTimerDisplay();

        if (remainingTime <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            timerMessage.textContent =
                "Session complete! Time for a little break. ✨";

        }

    }, 1000);

}


// Pauses the countdown.
function pauseCountdown() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerMessage.textContent = "Timer paused. Resume when ready.";

}


// Resets the countdown to 25 minutes.
function resetCountdown() {

    clearInterval(timerInterval);

    timerInterval = null;

    remainingTime = focusDuration;

    updateTimerDisplay();

    timerMessage.textContent = "Ready when you are.";

}


// Connects buttons to their functions.
startTimer.addEventListener("click", startCountdown);

pauseTimer.addEventListener("click", pauseCountdown);

resetTimer.addEventListener("click", resetCountdown);


// Shows the initial timer.
updateTimerDisplay();

 
