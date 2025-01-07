document.addEventListener("DOMContentLoaded", () => {
    const newtaskForm = document.getElementById("create-task-form");
    const newtaskDescription = document.getElementById("new-task-description");
    const taskPriority = document.getElementById("task-priority");
    const taskUl = document.getElementById("tasks");
  
    // Add an event listener for form submission
    newtaskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const taskDescription = newtaskDescription.value.trim();
      const priority = taskPriority.value;
  
      if (!taskDescription) {
        alert("Please enter a task description.");
        return;
      }
  
      createList(taskDescription, priority); // Pass the task and priority to createList
      newtaskDescription.value = ''; // Clear the input field
    });
  
    function createList(taskDescription, priority) {
      const li = document.createElement('li'); // Create a new list item
      const btn = document.createElement('button'); // Create a new button
  
      btn.textContent = "X"; // Set the button text
      btn.addEventListener("click", deleteTask); // Add click event to delete the task
  
      // Style the task based on priority
      if (priority === "high") {
        li.style.color = "red";
      } else if (priority === "medium") {
        li.style.color = "orange";
      } else {
        li.style.color = "green";
      }
  
      li.textContent = taskDescription; // Use the taskDescription parameter
      li.appendChild(btn); // Append button to the list item
      taskUl.appendChild(li); // Append the list item to the ul
    }
  
    function deleteTask(event) {
      event.target.parentNode.remove(); // Remove the list item
    }
  });
  