// VALIDATION STILL NEEDS TO BE COMPLETED

function validateFormFieldInput(data) {
  const addButton = document.getElementById('add');
  const locationInput = document.getElementById('location');
  const travelerInput = document.getElementById('traveler');
  const departureDateInput = document.getElementById('departure');
  const returnDateInput = document.getElementById('returning');
  const attractionInput = document.getElementById('attractions');
  const location = locationInput.value;
  const traveler = travelerInput.value;
  const departure = departureDateInput.value;
  const returnDate = returnDateInput.value;
  const attractions = attractionInput.value;

  if (location === '') {
    alert('Please enter a location.');
    return;
  }
  else if (traveler === '') {
    alert('Please add at least one traveler.');
    return;
  }
  else if (departure === '') {
    alert('Please select a departure date.');
    return;
  }
  else if (returnDate === '') {
    alert('Please select a return date.');
    return;
  }
  else if (returnDate < departure) {
    alert('Please select a return date that occurs after your departure date.');
    return;
  }
  else if (attractions === ''){
    alert('Please add at least one attraction.');
    return;
  }
//add to tasklist
taskList.addTask(location, traveler, departure, returnDate, attractions);
taskList.save();
//render tasks
taskList.render();
//clear form
locationInput.value = '';
travelerInput.value= '';
departureDateInput.value = '';
returnDateInput.value = '';
attractionInput.value = '';
 }




const taskList = new TaskManager;
taskList.load();
taskList.render();
add.addEventListener('click', validateFormFieldInput);
cardContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')) {
    let parentTask = event.target.parentElement.parentElement.parentElement;
    let taskId = Number(parentTask.id)
    let task = taskList.getTaskById(taskId);
    task.status = 'Booked'
    taskList.render();
    taskList.save();
  }

})
