// Get elements
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append delete button to the task
        li.appendChild(deleteButton);

        // Append the task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

// Add task when clicking the button
addButton.addEventListener('click', addTask);

// Add task when pressing Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
``