import { Popup } from './Popup.js';

export class PopupWithDeleteConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._formElementConfirmDeleting = this._popup.querySelector('.popup__form');
  }

  setSubmit(submit) {
    this._handleSubmitCallback = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElementConfirmDeleting.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
}