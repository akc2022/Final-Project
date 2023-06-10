function createTaskHtml(location, traveler, departure, returnDate, attractions, status) {
   const html = `
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${location}</h5>
          <p>Traveler(s): ${traveler}</p>
          <p>Departure Date: ${departure}</p>
          <p>Return Date:  ${returnDate}</p>
          <p class="card-text">Attractions: ${attractions}</p>
          <span>Status: </span><span class="text-success">${status}</span>
        </br>
          <a href="#" class="btn btn-primary mt-3">Delete</a>
        </div>
      </div>
    </div>
`;
return html;
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
          console.log(currentTask);
          let date = new Date(currentTask['departure']);
          let formattedDate = date.toDateString();
          formattedDate=formattedDate.substr(formattedDate.indexOf(' ') + 1);
          let taskHtml = createTaskHtml(currentTask['location'], currentTask['traveler'], formattedDate, currentTask['returnDate'], currentTask['attractions'], currentTask['status'] );
          tasksHtmlList.push(taskHtml);
        }
         const tasksHtml = tasksHtmlList.join('\n');
         let cardContainer = document.getElementById('cardContainer');
         cardContainer.innerHTML = tasksHtml;
      }
}
