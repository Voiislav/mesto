export class Card {
  constructor({ item, zoomImage, askDeleteConfirmation, handleLikeClick, element }, templateSelector, currentUserId) {
    this._item = item;
    this._zoomImage = zoomImage;
    this._askDeleteConfirmation = askDeleteConfirmation;
    this._handleLikeClick = handleLikeClick;
    this._templateSelector = templateSelector;
    this._element = element;
    this._currentUserId = currentUserId;
    this._name = item.name;
    this._link = item.link;
    this._owner = item.owner._id;
    this._cardId = item._id;
    this._likes = item.likes;
  }

  _getCardTemplate() {
    const cardTemplate = document.
    querySelector(this._templateSelector).
    content.
    querySelector('.element').
    cloneNode(true);

    return cardTemplate;
  }

  createCard(item) {
    this._element = this._getCardTemplate();
    const cardImage = this._element.querySelector('.element__photo'); 
    const cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__like');
    this._likesNumber = this._element.querySelector('.element__likes-number');
    this._deleteButton = this._element.querySelector('.element__trash');
    this._zoomButton = this._element.querySelector('.element__zoom');

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;

    // only card owner can delete it
    if (this._owner !== this._currentUserId) {
      this._deleteButton.style.display = 'none';
    };

    this.setLikes(this._likes);

    this._setEventListeners();
    
    return this._element;
  }

  _handleDeleteClick() {
    this._askDeleteConfirmation(this._item._id, this._item);
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._currentUserId;
    });
  }

  setLikes(array) {
    this._likesNumber.textContent = array.length;
    array = this._likes;
    if (this._checkLike()) {
      this._likeButton.classList.add('element__like_clicked');
    } else {
      this._likeButton.classList.remove('element__like_clicked');
    }
  }

  _handleCardClick() {
    this._zoomImage(this._item);
  }

  _setEventListeners() { 
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._cardId, this._checkLike(), this._element);
    }); 
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick()); 
    this._zoomButton.addEventListener('click', () => this._handleCardClick());
  }
}