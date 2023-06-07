
class TaskManager {
  constructor(currentId=0) {
    this.tasks = [];
    this.currentId= currentId;
  }

  addTask(name, description, assignedTo, dueDate, status='Pending') {
    this.currentId++;
    let id=this.currentId;
    this.tasks.push({id, name, description, assignedTo, dueDate, status});
    }
}
