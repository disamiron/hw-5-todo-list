var addButton = document.getElementById("add");
var inputTask = document.getElementById("new-task");
var unfinichedTask = document.getElementById("unfiniched-task")
var finichedTask = document.getElementById("finiched-task")

function createNewElement(task) {
  var listItem = document.createElement("li");
  var checkbox = document.createElement("button");
  checkbox.className = "checkbox";
  var label = document.createElement("label");
  label.innerText = task;
  label.className = "label";
  label.style.setProperty("display", "block");

  var input = document.createElement("input");
  input.type = "text";
  input.style.setProperty("display", "none");
  var editButton = document.createElement("button");
  editButton.className = "edit";

  var deleteButton = document.createElement("button");
  deleteButton.className ="delete";


  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(input);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

function addTask () {
  if(inputTask.value) {
    var listItem = createNewElement(inputTask.value);
    unfinichedTask.appendChild(listItem);
    bindTaskEvent(listItem, finichTask);
    inputTask.value="";
  }
}
addButton.onclick=addTask;

function deleteTask () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

function editTask () {
  var editButton = this;
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  var input = listItem.querySelector("input[type=text]");
  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    label.style.setProperty("display", "block");
    input.style.setProperty("display", "none");
    label.innerText = input.value;
    editButton.className = "edit";

  } else {
    input.value = label.innerText;
    label.style.setProperty("display", "none");
    input.style.setProperty("display", "block");
    editButton.className = "save";

  }
  listItem.classList.toggle("editMode");

}

function finichTask () {
  var listItem = this.parentNode;
  var checkbox = listItem.querySelector("button.checkbox");
  checkbox.className = "checkbox";
  finichedTask.appendChild(listItem);
  bindTaskEvent(listItem, unfinichTask);
}

function unfinichTask () {
  var listItem = this.parentNode;
  var checkbox = listItem.querySelector("button.checkbox");
  checkbox.className = "checkbox";
  unfinichedTask.appendChild(listItem);
  bindTaskEvent(listItem, finichTask);
}

function bindTaskEvent (listItem, checkboxEvent) {
  var checkbox = listItem.querySelector("button.checkbox");
  var editButton = listItem.querySelector("button.edit");
  var deleteButton = listItem.querySelector("button.delete");
  //обработчики
  checkbox.onclick = checkboxEvent;
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
}
