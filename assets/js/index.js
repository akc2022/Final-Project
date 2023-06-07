// let addButton = document.getElementById('add');
// add.addEventListener('click', validateFormFieldInput);
//
// function validateFormFieldInput(data) {
//   const locationInput = document.querySelector('#location');
//   const location = locationInput.value;
//   if (location === '') {
//     console.log('beep beep');
//   }
// }

const taskList = new TaskManager;
taskList.addTask('Allison', 'super cool description', 'Assigned to Allison', 'due tomorrow');
taskList.addTask('Bob', 'super cool description', 'Assigned to Bob', 'due tomorrow');
console.log(taskList.tasks);
