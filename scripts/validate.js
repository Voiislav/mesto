const formToValidate = document.querySelector('.popup__form');
const formsToValidate = document.querySelectorAll('.popup__form');
const userNameInput = document.querySelector('#user-name');
const userJobInput = document.querySelector('#user-job');
const placeTitleInput = document.querySelector('#place-title');
const placeLinkInput = document.querySelector('#place-link');
const submitButtonActive = document.querySelector('.popup__submit');
const submitButtonInactive = document.querySelector('.popup__submit_disabled');



const setSumbitButtonState = (isValid) => {
  if (isValid) {
    submitButtonActive.classList.add('popup__submit');
    submitButtonActive.classList.remove('popup__submit_disabled');
    submitButtonInactive.classList.add('popup__submit');
    submitButtonInactive.classList.remove('popup__submit_disabled');
    console.log('valid');
  }
  else {
    submitButtonActive.classList.add('popup__submit_disabled');
    submitButtonActive.classList.remove('popup__submit');
    console.log('not valid');
  }
};



const validateInput = (inputElement) => {
  let errorClass = document.querySelector(`#${inputElement.id}-error`);
  if (inputElement.checkValidity()) {
    errorClass.textContent = '';
    inputElement.classList.remove('popup__text_type_error');
  }
  else {
    errorClass.textContent = inputElement.validationMessage;
    inputElement.classList.add('popup__text_type_error');
  }
  if (formToValidate.checkValidity()) {
    setSumbitButtonState(true);
  } 
  else {
    setSumbitButtonState(false);
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
  };
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