const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

async function fetchTasks() {
    const response = await fetch('http://127.0.0.1:5000/tasks');
    const tasks = await response.json();
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const response = await fetch('http://127.0.0.1:5000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskText })
    });

    if (response.ok) {
        fetchTasks();
        taskInput.value = '';
    }
}

fetchTasks();
