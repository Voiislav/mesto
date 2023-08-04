const formToValidate = document.querySelector('.popup__form');
const formsToValidate = document.querySelectorAll('.popup__form');
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-job');
const placeTitleInput = document.querySelector('#place-title');
const placeLinkInput = document.querySelector('#place-link');


const validateInput = (inputElement) => {
  let errorClass = document.querySelector(`#${inputElement.id}-error`);
  if (inputElement.checkValidity()) {
    errorClass.textContent = '';
  }
  else {
    errorClass.textContent = inputElement.validationMessage;
  }
};

const validateFormOnSubmit = (evt) => {
  evt.preventDefault();
  validateInput(nameInput);
  validateInput(jobInput);
  validateInput(placeTitleInput);
  validateInput(placeLinkInput);
  if (formToValidate.checkValidity()) {
    formToValidate.reset();
  } 
  else {
    
  }
};

const validateFormOnInput = (evt) => {
  validateInput(evt.target);
}

const initValidationBySubmit = (formToValidate) => {
  formToValidate.addEventListener('submit', validateFormOnSubmit);
};

formsToValidate.forEach(initValidationBySubmit);

const initValidationByInput = (formToValidate) => {
  formToValidate.addEventListener('input', validateFormOnInput);
};

formsToValidate.forEach(initValidationByInput);