// Get DOM elements ---- Les élements DOM
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Application state (array of tasks) - Tableau de taches
let tasks = [];

/*
Each task structure:
{
    text: "Do something",
    done: false
}
*/

// ADD TASK ------- ajouter une tache
function addTask() {
    const text = input.value.trim();

    // Prevent empty tasks ---- préviens des tâches vides
    if (text === "") return;

    // Create a new task object - créer un nouvel objet tâches
    const task = {
        text: text,
        done: false
    };

    // Add task to array ---- ajoute une tache à un objet
    tasks.push(task);

    // Update UI and storage
    renderTasks();
    saveTasks();

    // Reset input
    input.value = "";
}

// RENDER TASKS (UI)
function renderTasks() {
    // Clear the list before re-rendering  -- nettoie la list avant le re-redenring
    list.innerHTML = "";

    // Loop through tasks -- boucle sur les taches
    tasks.forEach((task, index) => {

        // Create list item - Création de la liste
        const li = document.createElement("li");

        // Create text element
        const span = document.createElement("span");
        span.textContent = task.text;

        // Apply "done" style if task is completed --- ajoute "done" si la tache est faite
        if (task.done) {
            span.classList.add("done");
        }

        // Toggle done state on click  - evenement du done au clic
        span.addEventListener("click", () => {
            tasks[index].done = !tasks[index].done;
            renderTasks();
            saveTasks();
        });

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            // Remove task from array -- suppr une tache du tableau
            tasks.splice(index, 1);

            // Update UI and storage
            renderTasks();
            saveTasks();
        });

        // Append elements - évenements
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

// SAVE TASKS (localStorage)
function saveTasks() {
    // Convert array to JSON string  - convertit le tableau en JSON STRING
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// LOAD TASKS (on page load)
function loadTasks() {
    const data = localStorage.getItem("tasks");

    // If data exists, parse it  --- si la data existe, analyse
    if (data) {
        tasks = JSON.parse(data);
    }

    // Render tasks after loading
    renderTasks();
}

// Add task on button click
button.addEventListener("click", addTask);

// Add task when pressing ENTER
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// INIT APP
loadTasks();