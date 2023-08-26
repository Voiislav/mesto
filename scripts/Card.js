export class Card {
  constructor(data, templateSelector, handleOpenImagePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
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
      this._handleOpenImagePopup(this._name, this._link);
    })
  }

  static createCardElement(data, templateSelector, handleOpenImagePopup) {
    const card = new Card(data, templateSelector, handleOpenImagePopup);
    const cardElement = card._createCard();
    card._setEventListeners();
    return cardElement;
  }
}

