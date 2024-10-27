function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") return;

    const task = document.createElement("li");
    task.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(task);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}
