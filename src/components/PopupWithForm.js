import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this._submitCallback = submitCallback;
    this._popupFormEdit = document.querySelector('.popup__form_type_edit');
    this._popupInputs = this._popupFormEdit.querySelectorAll('.popup__text');
    this._popupSubmit = this._popupFormEdit.querySelector('.popup__submit');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _getInputValues() {
    const inputValues = {};

    this._popupInputs.forEach((popupInput) => {
      inputValues[popupInput.name] = popupInput.value;
    })

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormEdit.addEventListener('submit', this._handleFormSubmit);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._submitCallback(formData);
  }

  close() {
    super.close();
    this._popupFormEdit.reset();
  }
}