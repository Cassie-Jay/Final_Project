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
}
