const checkInputValidity = (formElement, formInput) => {
  const inputError = formElement.querySelector(`#${formInput.id}-error`);
  if (!formInput.checkValidity()) {
    inputError.textContent = formInput.validationMessage;
  }
  else {
    inputError.textContent = '';
  }
};

const changeButtonState = (isValid, submitButton, submitButtonInactive) => {
  if (isValid) {
    submitButtonInactive.removeAttribute('disabled', false);
    submitButtonInactive.classList.add('popup__submit');
    submitButtonInactive.classList.remove('popup__submit_disabled');
    submitButton.removeAttribute('disabled', false);
    submitButton.classList.add('popup__submit');
    submitButton.classList.remove('popup__submit_disabled');
  }
  else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('popup__submit_disabled');
    submitButton.classList.remove('popup__submit');
    submitButtonInactive.setAttribute('disabled', true);
    submitButtonInactive.classList.remove('popup__submit');
    submitButtonInactive.classList.add('popup__submit_disabled');
  }
};

const setEventListeners = () => {
  const formElements = Array.from(document.querySelectorAll('.popup__form'));
  formElements.forEach((formElement) => {
    const submitButton = document.querySelector('.popup__submit');
    const submitButtonInactive = document.querySelector('.popup__submit_disabled');
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const formInputs = Array.from(formElement.querySelectorAll('.popup__text'));
    formInputs.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        checkInputValidity(formElement, formInput);
        if (!formElement.checkValidity()) {
          changeButtonState(false, submitButton, submitButtonInactive); 
        }
        else {
          changeButtonState(true, submitButton, submitButtonInactive);
        };
      });
    });
  });
};

const enableValidation = () => {
  setEventListeners();
};

enableValidation({
  formElement: '.popup__form',
  formInput: '.popup__text',
  submitButton: '.popup__submit',
  submitButtonInactive: '.popup__submit_disabled',
  inputErrorClass: '.popup__text_type_error'
});







// const formElement = document.querySelector('.popup__form');
// const formInput = document.querySelector('.popup__text');
// const submitButtonActive = document.querySelector('.popup__submit');
// const submitButtonInactive = document.querySelector('.popup__submit_disabled');


// const activateSubmitButton = (submitButtonInactive) => {
//   submitButtonInactive.removeAttribute('disabled', 'disabled');
//   submitButtonInactive.classList.add('popup__submit');
//   submitButtonInactive.classList.remove('popup__submit_disabled');
// };

// const deactivateSubmitButton = (submitButtonActive) => {
//   submitButtonActive.setAttribute('disabled', 'disabled');
//   submitButtonActive.classList.add('popup__submit_disabled');
//   submitButtonActive.classList.remove('popup__submit');
// }

// const showInputError = (formElement, formInput) => {
//   const inputError = formElement.querySelector(`#${formInput.id}-error`)
//   formInput.classList.add('popup__text_type_error');
//   inputError.textContent = formInput.validationMessage;
// };

// const hideInputError = (formElement, formInput) => {
//   const inputError = formElement.querySelector(`#${formInput.id}-error`)
//   formInput.classList.remove('popup__text_type_error');
//   inputError.textContent = '';
// };

// const checkValidity = (formElement, formInput) => {
//   if (!formInput.validity.valid) {
//     showInputError(formElement, formInput);
//     deactivateSubmitButton(submitButtonActive);
//   }
//   else {
//     hideInputError(formElement, formInput);
//     activateSubmitButton(submitButtonInactive);
//   }
// };

// const setEventListeners = (formElement) => {
//   const formInputs = Array.from(formElement.querySelectorAll('.popup__text'));
//   formInputs.forEach((formInput) => {
//     formInput.addEventListener('input', () => {
//       checkValidity (formElement, formInput);
//     });
//   });
// };

// const enableValidation = () => {
//   const formElements = Array.from(document.querySelectorAll('.popup__form'));
//   formElements.forEach((formElement) => {
//     setEventListeners(formElement);
//   });
// };

// enableValidation(formElement, formInput, submitButtonActive, submitButtonInactive);








// const formInputs = document.querySelectorAll('.popup__text');
// const inputErrorClass = document.querySelector('.popup__text_type_error');
// const errorClass = document.querySelector('.popup__error');
// const userNameInput = document.querySelector('#user-name');
// const userJobInput = document.querySelector('#user-job');
// const placeTitleInput = document.querySelector('#place-title');
// const placeLinkInput = document.querySelector('#place-link');





// const formToValidate = document.querySelector('.popup__form');
// const formsToValidate = document.querySelectorAll('.popup__form');
// const userNameInput = document.querySelector('#user-name');
// const userJobInput = document.querySelector('#user-job');
// const placeTitleInput = document.querySelector('#place-title');
// const placeLinkInput = document.querySelector('#place-link');
// const submitButtonActive = document.querySelector('.popup__submit');
// const submitButtonInactive = document.querySelector('.popup__submit_disabled');


// const setSumbitButtonState = (isValid) => {
//   if (isValid) {
//     submitButtonInactive.removeAttribute('disabled');
//     submitButtonActive.classList.add('popup__submit');
//     submitButtonActive.classList.remove('popup__submit_disabled');
//     submitButtonInactive.classList.add('popup__submit');
//     submitButtonInactive.classList.remove('popup__submit_disabled');
//   }
//   else {
//     submitButtonActive.setAttribute('disabled', 'disabled');
//     submitButtonActive.classList.add('popup__submit_disabled');
//     submitButtonActive.classList.remove('popup__submit');
//   }
// };



// const validateInput = (inputElement) => {
//   let errorClass = document.querySelector(`#${inputElement.id}-error`);
//   if (inputElement.checkValidity()) {
//     errorClass.textContent = '';
//     inputElement.classList.remove('popup__text_type_error');
//   }
//   else {
//     errorClass.textContent = inputElement.validationMessage;
//     inputElement.classList.add('popup__text_type_error');
//   }
//   if (formToValidate.checkValidity()) {
//     setSumbitButtonState(true);
//   } 
//   else {
//     setSumbitButtonState(false);
//   }
// };

// const validateFormOnSubmit = (evt) => {
//   evt.preventDefault();
//   validateInput(nameInput);
//   validateInput(jobInput);
//   validateInput(placeTitleInput);
//   validateInput(placeLinkInput);
//   if (formToValidate.checkValidity()) {
//     formToValidate.reset();
//   };
// };

// const validateFormOnInput = (evt) => {
//   validateInput(evt.target);
// }

// const initValidationBySubmit = (formToValidate) => {
//   formToValidate.addEventListener('submit', validateFormOnSubmit);
// };

// formsToValidate.forEach(initValidationBySubmit);

// const initValidationByInput = (formToValidate) => {
//   formToValidate.addEventListener('input', validateFormOnInput);
// };

// formsToValidate.forEach(initValidationByInput);