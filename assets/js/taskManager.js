function createTaskHtml(location, traveler, departure, returnDate, attractions, status) {
   const html = `<li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${location}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${traveler}</small>
            <small>Due: ${departure}</small>
            <small>Due: ${returnDate}</small>
        </div>
        <p>${attractions}</p>
    </li>
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
