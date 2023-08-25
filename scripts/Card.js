import { handleOpenImagePopup } from "../scripts/index.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _createCard() {
    this._element = this._getTemplate();
    const photoElement = this._element.querySelector('.element__photo');
    photoElement.src = this._link;
    photoElement.alt = "На фото -" + this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._likeButton = this._element.querySelector('.element__button');
    this._removeButton = this._element.querySelector('.element__trash');
    this._zoomButton = this._element.querySelector('.element__zoom');

    return this._element;
  }

  _likeHandler() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _removeHandler() {
    this._element.remove();
  }

  // _zoomImageHandler() {
  //   imagePopupPhoto.src = this._link;
  //   imagePopupPhoto.alt = "На фото - " + this._name;
  //   imagePopupTitle.textContent = this._name;
  //   openPopup(imagePopup);
  // }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeHandler ();
    })
    this._removeButton.addEventListener('click', () => {
      this._removeHandler ();
    })
    this._zoomButton.addEventListener('click', () => {
      handleOpenImagePopup ();
    })
  }

  static createCardElement(data, templateSelector) {
    const card = new Card(data, templateSelector);
    const cardElement = card._createCard();
    card._setEventListeners();
    return cardElement;
  }
}

