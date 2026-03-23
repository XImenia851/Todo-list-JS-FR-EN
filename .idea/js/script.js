const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// ADD TASK
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";

    saveTasks();
}

// CLICK
button.addEventListener("click", addTask);

// ENTER
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// SAVE
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}

// LOAD
function loadTasks() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();