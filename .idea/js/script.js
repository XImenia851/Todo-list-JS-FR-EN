const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    //^^ When we click on this button, execute this function ^^ ---------- Quand on clic sur ce bouton, ça execute la fonction.
    //        () => {} code to execute
    const taskText = input.values;
    //We get what the user write ------------- on récupère ce que le user va taper dans les tasks.

    if (taskText === "") return;
    //If the user didn't write, then stop. We can't add empty field. ------------ si le user ne marque rien, on arrête.

    const li = document.createElement("li");
    li.textContent = taskText;
    //we create a HTML element "li" and we put in taskText - result => <li> tasktask </li>

    li.addEventListener("click", () =>{
        //we add an event on the task
        li.remove();
    }) //Delete a task when we click on it


    list.appendChild(li);
    //^^^^ we add a task in the list, kind of <ul> and <li> system.
    input.value = "";
})