// Taking all input from DOM
const ul = document.querySelector("ul");
const input = document.querySelector("#taskinput");
const btnAdd = document.querySelector(".add-btn");
const todoLis = [...document.querySelectorAll("li")];
const alertInfo = document.querySelector(".empty-msg");

const popup = document.querySelector(".popup");
const popupInput = document.querySelector("#popup-input");
const popupSubmitBtn = document.querySelector(".btn-submit");
const popupCancelBtn = document.querySelector(".btn-cancel");
// Editedvalue input
let editedTodo;

//Adding to do task to the list
const createNewTodo = () => {
  if (input.value.length) {
    const liText = input.value.trim();
    const liHTML = `
         ${liText}
        <div class="tools">
                  <button class="complete"><i class="fa fa-check" aria-hidden="true"></i>
                  </button><button class="edit">EDIT</button><button class="delete"><i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
      `;
    const id = Date.now();
    const li = document.createElement("li");
    li.setAttribute("id", id);
    li.innerHTML = liHTML;

    ul.appendChild(li);
    todoLis.push(li);
    input.value = "";
    handleEmptyListMessage();
  }
};

//Deleting task from the list
const deleteTodoAndChangeArrayOfTodos = (todo) => {
  const indexOfTodoToDelete = todoLis.indexOf(todo);
  todoLis.splice(indexOfTodoToDelete, 1);
  todo.remove();
};

const deleteTodo = (e) => {
  const todoToDelete = e.target.closest("li");
  deleteTodoAndChangeArrayOfTodos(todoToDelete);
  handleEmptyListMessage();
  console.log(todoLis.length);
};

const completedTodo = (e) => {
  e.target.closest("li").classList.toggle("completed");
};

//Edit the task
const handleEdit = (e) => {
  popup.style.display = "flex";
  editedTodo = e.target.closest("li");
  const text = editedTodo.firstChild.textContent;
  const popupInputValue = text.trim();
  popupInput.value = popupInputValue;
  popupSubmitBtn.addEventListener("click", () => submitEdition(editedTodo));
};

//Edited task submission button
const submitEdition = (editedTodo) => {
  if (popupInput.value.length) {
    const popupInputValue = popupInput.value.trim();
    console.log(popupInputValue);
    editedTodo.innerHTML = `
         ${popupInputValue}
         <div class="tools">
                  <button class="complete"><i class="fa fa-check" aria-hidden="true"></i>
                  </button><button class="edit">EDIT</button><button class="delete"><i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
      `;

    closePopup();
  }
};

//if user want to cancel the edit task
const closePopup = () => (popup.style.display = "none");
//HANDLE TODO TOOLS
const handleTodoTools = (e) => {
  if (
    e.target.classList.contains("delete") ||
    e.target.classList.contains("fa-times")
  ) {
    deleteTodo(e);
  } else if (
    e.target.classList.contains("complete") ||
    e.target.classList.contains("fa-check")
  ) {
    completedTodo(e);
  } else if (e.target.classList.contains("edit")) {
    handleEdit(e);
  }
};

//Check if to do list is empty or not
const handleEmptyListMessage = () => {
  if (!todoLis.length) alertInfo.style.display = "block";
  else alertInfo.style.display = "none";
};

handleEmptyListMessage();
// Event listener for buttons
btnAdd.addEventListener("click", createNewTodo);
ul.addEventListener("click", handleTodoTools);
popupCancelBtn.addEventListener("click", closePopup);
