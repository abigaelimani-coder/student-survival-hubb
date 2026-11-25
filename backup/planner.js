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

// Restores the previously selected theme.
if (localStorage.getItem("studentTheme") === "dark") {

    document.body.classList.add("dark");
    themeToggle.textContent = "☀";

}


// =========================
// MOBILE NAVIGATION
// Opens and closes the navigation menu on small screens.
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Closes the menu after selecting a link.
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";

    });

});


// =========================
// CURRENT DATE
// Automatically displays today's date.
// =========================

const currentDate = document.getElementById("currentDate");

const today = new Date();

currentDate.textContent = today.toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});


// =========================
// TASK MANAGER
// Allows users to add, complete and delete tasks.
// =========================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

const progressFill = document.getElementById("progressFill");
const progressPercentage = document.getElementById("progressPercentage");
const progressMessage = document.getElementById("progressMessage");

const clearCompleted = document.getElementById("clearCompleted");

// Stores tasks in the browser.
let tasks = JSON.parse(localStorage.getItem("plannerTasks")) || [];


// Saves tasks so they remain after refreshing the page.
function saveTasks() {

    localStorage.setItem("plannerTasks", JSON.stringify(tasks));

}


// Updates the progress bar.
function updateProgress() {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function (task) {
        return task.completed;
    }).length;

    const percentage = totalTasks === 0
        ? 0
        : Math.round((completedTasks / totalTasks) * 100);

    progressFill.style.width = percentage + "%";

    progressPercentage.textContent = percentage + "%";

    if (totalTasks === 0) {

        progressMessage.textContent =
            "Your day is a blank page. Start whenever you're ready.";

    } else if (percentage === 100) {

        progressMessage.textContent =
            "Everything is complete! Well done. ✨";

    } else {

        progressMessage.textContent =
            completedTasks + " of " + totalTasks +
            " tasks completed. Keep going!";

    }

}


// Displays all tasks on the page.
function displayTasks() {

    taskList.innerHTML = "";

    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";

    tasks.forEach(function (task) {

        const li = document.createElement("li");

        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Creates the checkbox.
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {

            task.completed = checkbox.checked;

            saveTasks();
            displayTasks();

        });

        // Creates the task description.
        const span = document.createElement("span");

        span.textContent = task.text;

        // Creates the delete button.
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "×";
        deleteButton.className = "delete-task";
        deleteButton.setAttribute("aria-label", "Delete task");

        deleteButton.addEventListener("click", function () {

            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            saveTasks();
            displayTasks();

        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

    updateProgress();

}


// Adds a new task when the form is submitted.
taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        id: Date.now() + Math.random(),
        text: taskText,
        completed: false
    });

    saveTasks();

    displayTasks();

    taskInput.value = "";

});


// Removes every completed task.
clearCompleted.addEventListener("click", function () {

    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    saveTasks();

    displayTasks();

});


// Displays saved tasks when the page opens.
displayTasks();

 
