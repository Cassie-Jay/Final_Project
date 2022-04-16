export class TaskManager {
  constructor(tasks = [], currentId = 0) {
    this.tasks = tasks;
    this.currentId = currentId;
  }
  //method used to add a task to the tasks array of this class
  addTask(name, description, assignedTo, dueDate, status = "TODO") {
    this.currentId+=1;
    //creat an object that pass values provided the method parameter
    const newTask = {
      taskId: this.currentId,
      taskName: name,
      taskDescription: description,
      taskAssignedTo: assignedTo,
      taskDueDate: dueDate,
      taskStatus: status
    }
    //add the new task object to the tasks array of the class
   this.tasks.push(newTask) ;
  }

    getTaskById(taskId) {
      let foundTask;
   
      //Creat a variable to store found task from Step 4
      //Loop and   // Check if its the right task by comparing the task's id to the id passed as a parameter

      for (let i=0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        // console.log("looking for a task "+task["taskStatus"])
        
        if (String(task.taskId) == String(taskId)) {
          // console.log(taskId, task.taskId)
          foundTask = task;
        }
      }
      // console.log("FoundTask: "+foundTask);
      return foundTask;
  }

  createTaskHtml = (id,name, description, assignedTo, dueDate, status) => {
  //   const html = `
  //       <li class="list-group-item" data-task-id=${id}>
  //           <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
  //               <h5>${name}</h5>
  //               <span class="badge badge-danger">${status}</span>
  //           </div>
  //           <div class="d-flex w-100 mb-3 justify-content-between">
  //               <small>Assigned To: ${assignedTo}</small>
  //               <small>Due: ${dueDate}</small>
  //           </div>
  //           <p>${description}</p>
  //           <div class="d-flex w-100 justify-content-end">
  //           <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
  //       </div>
  //       </li>
    // `
    /*Task 7, Step 3; adding an id <td class='data-task-id=${id}'></td>*/
    // console.log("Form Details:  ", id, name, description, assignedTo, dueDate, status);
    const row = `        
        <td>${name}</td>
        <td>${description}</td>
        <td>${assignedTo}</td>  
        <td>${status}</td>     
        <td>${dueDate}</td>
        <td class="mark-done-container"></td>
        <td class="delete-button-container"></td>
    `
    //I put the id there because of sept 3 in task 7//
    // console.log("row",row);
    return row;
    }
    
    deleteTask(taskId) {
      // Create an empty array and store it in a new variable, newTasks
      const newTasks = [];

      // Loop over the tasks
      for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];
        
        // Check if the task id is not the task id passed in as a parameter
        if (task.taskId !== taskId) {
          // Push the task to the newTasks array
          newTasks.push(task);
        }
        else{
          console.log("DELETE ",task );
        }
      }
      this.tasks = newTasks;
  }

    save() {
      // Create a JSON string of the tasks
      const tasksJson = JSON.stringify(this.tasks);

      // Store the JSON string in localStorage
      localStorage.setItem('tasks', tasksJson);

      // Convert the currentId to a string;
      const currentId = String(this.currentId);

      // Store the currentId in localStorage
      localStorage.setItem('currentId', currentId);
  }

  load() {
    // Check if any tasks are saved in localStorage
    if (localStorage.getItem('tasks')) {
        // Get the JSON string of tasks in localStorage
        const tasksJson = localStorage.getItem('tasks');

        // Convert it to an array and store it in our TaskManager
        this.tasks = JSON.parse(tasksJson);
    }

    // Check if the currentId is saved in localStorage
    if (localStorage.getItem('currentId')) {
        // Get the currentId string in localStorage
        const currentId = localStorage.getItem('currentId');

        // Convert the currentId to a number and store it in our TaskManager
        this.currentId = Number(currentId);
    }
}

    render=()=>{
      console.log("RENDER");
      const tasksHtmlList = [];
      document.getElementById('tasksList').innerHTML = `    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Assigned To</th>
      <th>Status</th>
      <th>Due Date</th>
      <th>Checkbox</th>
      <th>Delete</th>
    </tr> `;
      for (let i=0; i<this.tasks.length; i++){
        let task = this.tasks[i];
        let date = new Date(task.taskDueDate);
        const formattedDate = date.toString();
        // console.log(task.taskName, task.taskDescription,task.taskAssignedTo,formattedDate, task.status)
        const taskHtml = this.createTaskHtml(task.taskId, task.taskName, task.taskDescription,task.taskAssignedTo,formattedDate, task.taskStatus);
        // console.log(" Status:  "+task.status);
        tasksHtmlList.push(taskHtml);
        //added task.id here because of instructions//
        // const tasksHtml = tasksHtmlList.join('\n');
        let taskRow = document.createElement('tr');
        taskRow.setAttribute("data-task-id",`${task.taskId}`);
        taskRow.innerHTML = taskHtml;
        // const buttonstring = `
        // <button class="btn btn-outline-success done-button ${task.status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        // <button class="btn btn-outline-danger delete-button">Delete</button>
        // `;
        const button = document.createElement('button');
        button.innerHTML = "Mark As Done";
        button.setAttribute('class', 'done-button');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "delete";
        deleteButton.setAttribute('class', 'delete-button');

        taskRow.getElementsByClassName("mark-done-container")[0].appendChild(button);
        taskRow.getElementsByClassName("delete-button-container")[0].appendChild(deleteButton);
        // console.log("taskHtml: "+taskHtml);
        // console.log("button: "+taskRow.getElementsByClassName("mark-done-container")[0].innerHTML);
        document.getElementById('tasksList').append(taskRow);
      }
    }
}

