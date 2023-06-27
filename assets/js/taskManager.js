function createTaskHtml(id, location, traveler, departure, returnDate, attractions, status) {
   const html = `
    <div class="col mb-4" id=${id}>
      <div class="card">
      <div class="container-flex d-flex justify-content-end"><button class="delete-button m-3">x</button></div>
        <div class="card-body">
          <h5 class="card-title">${location}</h5>
          <p>Traveler(s): ${traveler}</p>
          <p>Departure Date: ${departure}</p>
          <p>Return Date:  ${returnDate}</p>
          <p class="card-text">Attractions: ${attractions}</p>
          <span>Status: </span><span>${status}</span>
        </br>
          <button class="btn btn-primary mt-3 done-button">Mark as Booked</button>
        </div>
      </div>
    </div>
`;
return html;
}

function formatDate(dateInput) {
  let date = new Date(dateInput.replace(/-/g, '\/').replace(/T.+/, ''));
  let formattedDate = date.toDateString();
  formattedDate = formattedDate.substr(formattedDate.indexOf(' ') + 1);
  return formattedDate;
}

class TaskManager {
  constructor(currentId=0) {
    this.tasks = [];
    this.currentId= currentId;
  }

  addTask(location, traveler, departure, returnDate, attractions, status='Pending') {
    this.currentId++;
    let id=this.currentId;
    this.tasks.push({id, location, traveler, departure, returnDate, attractions, status});
    }
    render() {
      const tasksHtmlList = [];
        for (var i = 0; i < this.tasks.length; i++) {
          let currentTask = this.tasks[i];
          let taskHtml = createTaskHtml(currentTask.id, currentTask['location'], currentTask['traveler'], formatDate(currentTask['departure']), formatDate(currentTask['returnDate']), currentTask['attractions'], currentTask['status'] );
          tasksHtmlList.push(taskHtml);
        }
         const tasksHtml = tasksHtmlList.join('\n');
         let cardContainer = document.getElementById('cardContainer');
         cardContainer.innerHTML = tasksHtml;
      }
    getTaskById(taskId) {
      let foundTask;
      for (let i=0; i<this.tasks.length; i++) {
        let currentTask = this.tasks[i]
        if (taskId === currentTask.id) {
          let foundTask = currentTask;
          return foundTask;
        }
      }
    }
    save() {
      let tasksJson = JSON.stringify(this.tasks);
      localStorage.setItem("tasks", tasksJson);
      let currentId = String(this.currentId);
      localStorage.setItem("currentId", currentId)
    }
    load() {
      if(localStorage.getItem("tasks")) {
        let tasksJson = localStorage.getItem("tasks");
        this.tasks  = JSON.parse(tasksJson);
      }
      if(localStorage.getItem("currentId")) {
        let currentId = localStorage.getItem("currentId");
        this.currentId = parseInt(currentId, 10);
      }
    }
    deleteTask(taskId) {
      let newTasks = [];
      for (let i=0; i<this.tasks.length; i++) {
        let task = this.tasks[i];
        if (task.id !== taskId) {
          newTasks.push(task);
        }
      }
      this.tasks = newTasks;
    }
}
