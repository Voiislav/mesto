class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._formInputs = Array.from(formElement.querySelectorAll(settings.formInput));
    this._submitButton = formElement.querySelector(settings.submitButtonSelector);
    this._inputErrorClass = settings.inputErrorClass;

    this._setEventListeners();
  }

  _checkInputValidity(input) {
    const inputError = this._formElement.querySelector(`#${input.id}-error`);
    if (!input.checkValidity()) {
      inputError.textContent = input.validationMessage;
    } 
    else {
      inputError.textContent = '';
    }
  }

  _changeButtonState(isValid) {
    if (isValid) {
      this._submitButton.removeAttribute('disabled', false);
    } 
    else {
      this._submitButton.setAttribute('disabled', true);
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        if (!this._formElement.checkValidity()) {
          this._changeButtonState(false, this._submitButton);
        } 
        else {
          this._changeButtonState(true, this._submitButton);
        }
      });
    });
  }

  enableValidation() {
    this._formInputs.forEach((input) => {
      this._checkInputValidity(input);
    });
    this._changeButtonState(this._formElement.checkValidity());
  }
}

const validationSettings = {
  formElement: '.popup__form',
  formInput: '.popup__text',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: '.popup__text_type_error'
};

const forms = Array.from(document.querySelectorAll(validationSettings.formElement));
forms.forEach((formElement) => {
  const validator = new FormValidator(validationSettings, formElement);
  validator.enableValidation();
});
