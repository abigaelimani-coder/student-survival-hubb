// ABOUT ME PAGE JAVASCRIPT
// Controls the little reminder button and dark mode.

// 1. Select the reminder button and extra message.
const noteButton = document.getElementById("noteButton");
const extraNote = document.getElementById("extraNote");

// 2. Show or hide the extra reminder when the button is clicked.
if (noteButton && extraNote) {
    noteButton.addEventListener("click", function () {

        if (extraNote.hidden) {
            extraNote.hidden = false;
            noteButton.textContent = "Hide reminder";
        } else {
            extraNote.hidden = true;
            noteButton.textContent = "Read my little reminder";
        }

    });
}

// 3. Apply the website's saved theme.
const savedTheme = localStorage.getItem("studentTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

 
