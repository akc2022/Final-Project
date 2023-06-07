
class TaskManager {
  constructor(currentId=0) {
    this.tasks = [];
    this.currentId= currentId;
  }

  addTask(location, departure, returnDate, attractions, status='Pending') {
    this.currentId++;
    let id=this.currentId;
    this.tasks.push({id, location, departure, returnDate, attractions, status});
    }
}
