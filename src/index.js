document.addEventListener("DOMContentLoaded", () => {
  const newtaskForm = document.getElementById("create-task-form");
  const newtaskDescription = document.getElementById("new-task-description");
  const taskUl = document.getElementById("tasks");

  // Add an event listener for form submission
  newtaskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
      createList(newtaskDescription.value); // Pass the input value to createList
      newtaskDescription.value = ''; // Clear the input field
  });

  function createList(taskDescription) {
      const li = document.createElement('li'); // Create a new list item
      const btn = document.createElement('button'); // Create a new button

      btn.textContent = "X"; // Set the button text
      btn.addEventListener("click", deleteTask); // Add click event to delete the task
      
      li.textContent = taskDescription; // Use the taskDescription parameter
      li.appendChild(btn); // Append button to the list item
      taskUl.appendChild(li); // Append the list item to the ul
  }

  function deleteTask(event) {
      event.target.parentNode.remove(); // Remove the list item
  }
});
