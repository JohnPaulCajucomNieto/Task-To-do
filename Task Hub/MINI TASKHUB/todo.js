document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoLane = document.getElementById("todo-lane");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerHTML = `
      <span class="task-text">${value}</span>
      <button class="delete-button">Delete</button>
    `;

    newTask.addEventListener("dragstart", () => {
      newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
      newTask.classList.remove("is-dragging");
    });

    const deleteButton = newTask.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    todoLane.appendChild(newTask);

    input.value = "";
  });
});