// UI Variables
const form = document.querySelector(".submission-form");
const taskList = document.querySelector(".list-group");
const taskInput = document.querySelector(".new-task-input");
const filter = document.querySelector(".filter-input");
const clearTasksBtn = document.querySelector(".clear-tasks-btn");

// ------------------------------

// Event Storage

function eventHolder() {
  // Add Tasks Function
  form.addEventListener("submit", addTask);

  //   Filter Tasks Function
  filter.addEventListener("keyup", filterTasks);

  //   Delete Tasks Function
  taskList.addEventListener("click", removeTask);

  //   Clear All Tasks Function
  clearTasksBtn.addEventListener("click", clearAllTasks);
}

eventHolder();

// ------------------------------

// Add Tasks

function addTask(e) {
  e.preventDefault();

  //   Create li
  const li = document.createElement("li");
  li.className = ` list-group-item d-flex justify-content-between align-items-center mt-2`;
  li.textContent = taskInput.value;

  //   Create link
  const link = document.createElement("span");
  link.className = `secondary-content delete-item`;
  link.innerHTML = `<i class="fas fa-trash"></i
  >`;

  //   Append link to li
  li.appendChild(link);

  //   Append li to list
  if (taskInput.value === "") {
    alert("Please add a task!");
  } else {
    taskList.appendChild(li);
  }

  //   Clear new task input
  taskInput.value = "";
}

// ------------------------------

// Filter Through Tasks

function filterTasks(e) {
  const taskText = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll(".list-group-item");

  tasks.forEach((task) => {
    if (!task.textContent.toLowerCase().match(taskText)) {
      task.classList.add("hide-item");
    } else {
      task.classList.remove("hide-item");
    }
  });
}

// ------------------------------

// Remove Tasks (individually)

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

// ------------------------------

// Clear All Tasks

function clearAllTasks() {
  const tasks = document.querySelectorAll(".list-group-item");
  tasks.forEach((task) => {
    task.remove();
  });
}
