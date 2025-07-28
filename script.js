// Script for Todo App

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = todo;

    // 🖊️ Update Button
    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-sm btn-warning me-2";
    updateBtn.textContent = "Update";
    updateBtn.onclick = function () {
      const updated = prompt("Update your todo:", todo);
      if (updated !== null && updated.trim() !== "") {
        todos[index] = updated.trim();
        renderTodos();
      }
    };

    // ❌ Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      todos.splice(index, 1);
      renderTodos();
    };

    const btnGroup = document.createElement("div");
    btnGroup.appendChild(updateBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    todoList.appendChild(li);
  });
}

// Add Todo
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = todoInput.value.trim();
  if (newTodo !== "") {
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
});
