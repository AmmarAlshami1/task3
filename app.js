document.addEventListener("DOMContentLoaded", (e) => {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add_button");
  var deleteButtens = document.querySelectorAll(".delete");
  var editButtens = document.querySelectorAll(".edit");

  // Function to edit Item from list.
  const editFunction = (editBtn) => {
    editBtn.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      const typeInto = parent.querySelector('input[type="text"]');
      const labelItem = parent.querySelector("label");
      const display = getComputedStyle(typeInto).getPropertyValue("display");
      if (display == "none") {
        labelItem.style.setProperty("display", "none");
        typeInto.style.setProperty("display", "block");
        const labelValue = labelItem.innerHTML;
        typeInto.value = labelValue;
      } else if (display == "block") {
        typeInto.style.setProperty("display", "none");
        labelItem.style.setProperty("display", "block");
        labelItem.innerHTML = typeInto.value;
      }
    });
  };
  editButtens.forEach(editFunction);

  // Function to delete Item from list.
  const deleteFunction = (deleteBtn) => {
    deleteBtn.addEventListener("click", (d) => {
      const parent = d.target.parentElement;
      parent.remove();
    });
  };
  deleteButtens.forEach(deleteFunction);

  // Function to complete the task.
  const completedTask = (e) => {
    const parent = e.target.parentElement;
    var listOfcompletedTasks = document.getElementById("completed-tasks");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    const label = document.createElement("label");
    const labelValue = parent.querySelector("label").innerHTML;
    label.textContent = labelValue;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);
    listOfcompletedTasks.prepend(li);
    parent.remove();
    document // To count the list items.
      .querySelectorAll("#completed-tasks input[type='checkbox']")
      .forEach((checkBox) => {
        checkBox.addEventListener("change", ReternToInComplete);
      });

    // To use buttons on the list items.
    deleteButtens = document.querySelectorAll(".delete");
    deleteButtens.forEach(deleteFunction);
    editButtens = document.querySelectorAll(".edit");
    editButtens.forEach(editFunction);
  };

  // Function to add the task for todo list.
  const addTask = (e) => {
    const newTaks = taskInput.value;
    var listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = document.createElement("li");
    const typeInto = document.createElement("input");
    typeInto.type = "text";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = false;
    const label = document.createElement("label");
    label.textContent = newTaks;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(typeInto);
    li.appendChild(edit);
    li.appendChild(deleteButton);
    listOfIncompleteTasks.prepend(li);
    listOfIncompleteTasks
      .querySelectorAll("li input[type='checkbox']")[0]
      .addEventListener("change", completedTask);
    taskInput.value = ""; // empty out the add input

    // To use buttons on the list items.
    deleteButtens = document.querySelectorAll(".delete");
    deleteButtens.forEach(deleteFunction);
    editButtens = document.querySelectorAll(".edit");
    editButtens.forEach(editFunction);
  };
  addButton.addEventListener("click", addTask);
  document // To count the list items.
    .querySelectorAll("#incomplete-tasks input[type='checkbox']")
    .forEach((checkBox) => {
      checkBox.addEventListener("change", completedTask);
    });

  // Function to return the task for todo list.
  const ReternToInComplete = (e) => {
    const parent = e.target.parentElement;
    const labelValue = parent.querySelector("label").innerHTML;
    var listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = labelValue;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);
    listOfIncompleteTasks.prepend(li);
    parent.remove();
    listOfIncompleteTasks
      .querySelectorAll("li input[type='checkbox']")[0]
      .addEventListener("change", completedTask);
    document // To count the list items.
      .querySelectorAll("#completed-tasks input[type='checkbox']")
      .forEach((checkBox) => {
        checkBox.addEventListener("change", ReternToInComplete);

        // To use buttons on the list items.
        deleteButtens = document.querySelectorAll(".delete");
        deleteButtens.forEach(deleteFunction);
        editButtens = document.querySelectorAll(".edit");
        editButtens.forEach(editFunction);
      });
  };
});
