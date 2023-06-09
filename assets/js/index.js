//  VALIDATION STILL NEEDS TO BE COMPLETED AND ERROR MESSAGES NEED TO BE DISPLAYED
//to validate travelers, travelers needs to be names not number
//to validate location, location needs to be string
//to validate dates, dates need to be number, returning needs to be later than departure

//need to correct card formatting in render function
//need to correct returndate formatting in render function
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
    console.log('beep beep');
  }
//add to tasklist
taskList.addTask(location, traveler, departure, returnDate, attractions);
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
add.addEventListener('click', validateFormFieldInput);
const taskHTML = createTaskHtml('Hawaii', 'Allison', '3/3/23', '3/6/23', 'attractions are cool' , 'TODO');
console.log(taskHTML);
