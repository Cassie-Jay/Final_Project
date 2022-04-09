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
   this.tasks.push(newTask) 
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
    return html;
    }
    render=()=>{
      const tasksHtmlList = [];
      for (let i=0; i<this.tasks.length; i++){
        let date = new Date(this.tasks[i].dueDate);
        const formattedDate = date.toString();
        const taskHtML = createTaskHtml(this.name, this.description, this.assignedTo, formattedDate, this.status);
        tasksHtmlList.push(taskHtML);
        const tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('tasksList').innerHtml=tasksHtml;
      }
    }
}
