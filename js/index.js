import { TaskManager } from "./taskManager.js";
const myTaskManager = new TaskManager();
// myTaskManager.addTask('clean my house', 'do dishes and clean my bed', 'Meaza', new Date().toDateString(), 'in progress')
// myTaskManager.addTask('walk the do', 'clean cars', 'Simon', new Date().toDateString())
// myTaskManager.addTask('clean my bath', 'cook ', 'Eden', new Date().toDateString())
// myTaskManager.addTask('do laundary', 'go to gym', 'Elias', new Date().toDateString())
const taskForm = document.getElementById('task_form');

// Load the tasks from localStorage
myTaskManager.load();

// Render the tasks to the page
myTaskManager.render();

taskForm.addEventListener("submit", event => {
    event.preventDefault();
    let nameInput = document.getElementById('newTaskNameInput');
    let descriptionInput = document.getElementById('Description');
    let assignedToInput = document.getElementById('AssignedTo');
    let statusInput = document.getElementById('status');
    let dateInput = document.getElementById('Duedate');
    myTaskManager.addTask(nameInput.value, descriptionInput.value, assignedToInput.value, dateInput.value, statusInput.value)
    myTaskManager.render();
    console.table(myTaskManager.tasks);

    nameInput.value = "";
    descriptionInput.value = "";
    assignedToInput.value = "";
    dateInput.value = "";
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  

  /* Task 6 */
  const validFormFieldInput = (data) =>{
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const name = newTaskNameInput.value;
  console.log("newTaskNameInput", name);
  }
  console.log('my name');


  // Select the Tasks List
  
//   console.log("  let taskRows = document.querySelectorAll(.mark-done-container");
// const tasksList = document.querySelector('#tasksList');
// let taskRows = document.querySelectorAll(".mark-done-container");
// taskRows.forEach( e => {
//   let button = e.querySelector("button");
//   console.log(button.innerHTML);
//   button.addEventListener("click", ()=> console.log("MARK AS COMPLETE"))
// })
// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
  // console.log("MARK AS DONE");
  // console.log("getTaskByID: ",myTaskManager.getTaskById(1))
  // console.log("Button clicked: ",event.target.classList);
    // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains('done-button')) {
    // Get the parent Task
    const parentTask = event.target.parentElement.parentElement;

    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);
    // console.log("taskId of the parent:",taskId);

    // Get the task from the TaskManager using the taskId
    const task = myTaskManager.getTaskById(taskId);

    // Update the task status to 'DONE'
    // console.log("taskStatus:",task);
    task.taskStatus = 'Done';

    myTaskManager.save();  

    // Render the tasks
    myTaskManager.render();
  }
  if (event.target.classList.contains('delete-button')) {
    // Get the parent Task
    const parentTask = event.target.parentElement.parentElement;

    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);

    // Delete the task
    myTaskManager.deleteTask(taskId);

    // Save the tasks to localStorage
    myTaskManager.save();

    // Render the tasks
    myTaskManager.render();
  }
});

