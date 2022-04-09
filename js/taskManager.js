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
      
    }
    //add the new task object to the tasks array of the class
   this.tasks.push(newTask) ;
  }

  createTaskHtml = ( name, description, assignedTo, dueDate, status) => {
    const html = `
        <li class="list-group-item">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                <h5>${name}</h5>
                <span class="badge badge-danger">${status}</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
                <small>Assigned To: ${assignedTo}</small>
                <small>Due: ${dueDate}</small>
            </div>
            <p>${description}</p>
        </li>
    `
    console.log("Form Details:  ",name, description, assignedTo, dueDate, status);
    const row = `
      <tr>
        <td>${name}</td>
        <td>${description}</td>
        <td>${assignedTo}</td>       
        <td>${dueDate}</td>
        <td>${status}</td>
      </tr>
    `
    console.log("row",row);
    return row;
    }
  
    render=()=>{
      console.log("RENDER");
      const tasksHtmlList = [];
      for (let i=0; i<this.tasks.length; i++){
        let task = this.tasks[i];
        let date = new Date(task.taskDueDate);
        const formattedDate = date.toString();
        console.log(task.taskName, task.taskDescription,task.taskAssignedTo,formattedDate, task.status)
        const taskHtml = this.createTaskHtml(task.taskName, task.taskDescription,task.taskAssignedTo,formattedDate, task.status);
        tasksHtmlList.push(taskHtml);
        const tasksHtml = tasksHtmlList.join('\n');
        console.log("tasksHtml: "+tasksHtml);
        document.getElementById('tasksList').append(tasksHtml);
      }
    }
}
