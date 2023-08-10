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