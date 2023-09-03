export class FormValidator {
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

  changeButtonState(isValid) {
    if (isValid) {
      this._submitButton.removeAttribute('disabled', isValid);
    } 
    else {
      this._submitButton.setAttribute('disabled', !isValid);
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    this._formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        if (!this._formElement.checkValidity()) {
          this._submitButton.setAttribute('disabled', !this._formElement.checkValidity());
        } 
        else {
          this._submitButton.removeAttribute('disabled', this._formElement.checkValidity());
        }
      });
    });
  }

  enableValidation() {
    this._formInputs.forEach((input) => {
      this._checkInputValidity(input);
    });
    this.changeButtonState(this._formElement.checkValidity());
  }
}

