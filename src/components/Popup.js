export class Popup {
  constructor(popup) {
    this.popup = popup;
    this.editPopupOpenButton = document.querySelector('.profile__button_type_edit');
    this.addPopupOpenButton = document.querySelector('.profile__button_type_add');
    this._editPopup = document.querySelector('.popup_type_edit');
    this._addPopup = document.querySelector('.popup_type_add');
    this.closeButton = this.popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  open(popup) {
    popup.classList.add('popup_opened');
  }

  close() {
    this.popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  setEventListeners() {
    this.closeButton.addEventListener('click', () => this.close());
    this.editPopupOpenButton.addEventListener('click', () => this.open(this._editPopup));
    this.addPopupOpenButton.addEventListener('click', () => this.open(this._addPopup));
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleOverlayClose);
  }
}