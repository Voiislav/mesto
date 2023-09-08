export class Card {
  constructor(element, handleCardClick, item) {
    this._element = element;
    this._handleCardClick = handleCardClick;
    this._item = item;
  }

  _getCardTemplate() {
    const cardTemplate = document.
    querySelector('.elements-template').
    content.
    querySelector('.element').
    cloneNode(true);

    return cardTemplate;
  }

  createCard(item) {
    this._element = this._getCardTemplate();
    const cardImage = this._element.querySelector('.element__photo'); 
    const cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__trash');
    this._zoomButton = this._element.querySelector('.element__zoom');

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;

    this._setEventListeners();
    
    return this._element;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _handleDeleteClick() {
    const elementToRemove = this._deleteButton.closest('.element');
    elementToRemove.remove();
  }

  _setEventListeners() { 
    this._likeButton.addEventListener('click', () => this._handleLikeClick()); 
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick()); 
    this._zoomButton.addEventListener('click', () => this._handleCardClick(this._item));
  }
}