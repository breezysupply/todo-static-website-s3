function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", toggleTask);
        var textSpan = document.createElement("span");
        textSpan.textContent = taskText;
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(event) {
    var checkbox = event.target;
    var textSpan = checkbox.nextElementSibling;
    if (checkbox.checked) {
        textSpan.style.textDecoration = "line-through";
    } else {
        textSpan.style.textDecoration = "none";
    }
}

function resetTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear all tasks
}
