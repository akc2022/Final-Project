let addButton = document.getElementById('add');
add.addEventListener('click', validateFormFieldInput);

function validateFormFieldInput(data) {
  const locationInput = document.querySelector('#location');
  const location = locationInput.value;
  if (location === '') {
    console.log('beep beep');
  }
}
