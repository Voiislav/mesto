import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this._submitCallback = submitCallback;
    this._popupForm = popup.querySelector('.popup__form');
    this._popupInputs = this._popupForm.querySelectorAll('.popup__text');
    this._popupSubmit = this._popupForm.querySelector('.popup__submit');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._initialButton = this._popupSubmit.textContent;
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
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }


  close() {
    super.close();
    this._popupForm.reset();
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._submitCallback(formData);
  }

  showSavingText(state) {
    if(state) {
      this._popupSubmit.textContent = 'Cохранение...';
    } else {
      this._popupSubmit.textContent = this._initialButton;
    }
  }
}