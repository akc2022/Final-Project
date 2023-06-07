//  VALIDATION STILL NEEDS TO BE COMPLETED
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
taskList.addTask(location, departure, returnDate, attractions);
 }









const taskList = new TaskManager;
add.addEventListener('click', validateFormFieldInput);
