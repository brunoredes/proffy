const selectButton = document.querySelector("#add-time");

selectButton.addEventListener('click', cloneField);

function cloneField() {
  const getFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

  const getInputFields = getFieldContainer.querySelectorAll('input');

  getInputFields.forEach(v => v.value = '');

  document.querySelector('#schedule-items').appendChild(getFieldContainer);
}
