const checkInputValidity = (form, input, validationSettings) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  if (!input.checkValidity()) {
    inputError.textContent = input.validationMessage;
  }
  else {
    inputError.textContent = '';
  }
};

const changeButtonState = (isValid, buttonElement) => {
  if (isValid) {
    buttonElement.removeAttribute('disabled', false);
  }
  else {
    buttonElement.setAttribute('disabled', true);
  }
};

const setEventListeners = (validationSettings) => {
  const forms = Array.from(document.querySelectorAll(validationSettings.formElement));
  forms.forEach((form) => {
    const buttonElement = form.querySelector(validationSettings.submitButtonSelector);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputs = Array.from(form.querySelectorAll(validationSettings.formInput));
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(form, input, validationSettings);
        if (!form.checkValidity()) {
          changeButtonState(false, buttonElement);
        }
        else {
          changeButtonState(true, buttonElement);
        };
      });
    });
  });
};


const enableValidation = (validationSettings) => {
  setEventListeners(validationSettings);
};

enableValidation({
  formElement: '.popup__form',
  formInput: '.popup__text',
  submitButtonSelector: '.popup__submit',
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