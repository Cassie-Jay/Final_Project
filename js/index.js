import { TaskManager } from "./taskManager.js";
const myTaskManager = new TaskManager();
// myTaskManager.addTask('clean my house', 'do dishes and clean my bed', 'Meaza', new Date().toDateString(), 'in progress')
// myTaskManager.addTask('walk the do', 'clean cars', 'Simon', new Date().toDateString())
// myTaskManager.addTask('clean my bath', 'cook ', 'Eden', new Date().toDateString())
// myTaskManager.addTask('do laundary', 'go to gym', 'Elias', new Date().toDateString())
const taskForm = document.getElementById('task_form');

taskForm.addEventListener("submit", event => {
    event.preventDefault();
    let nameInput = document.getElementById('Taskname');
    let descriptionInput = document.getElementById('Description');
    let assignedToInput = document.getElementById('AssignedTo');
    let statusInput = document.getElementById('status');
    let dateInput = document.getElementById('Duedate');
    myTaskManager.addTask(nameInput.value, descriptionInput.value, assignedToInput.value, dateInput.value, statusInput.value)
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
  console.log('my name');