export class Card {
  constructor(item, zoomImage, askDeleteConfirmation, handleLikeClick, element) {
    this._element = element;
    this._zoomImage = zoomImage;
    this._askDeleteConfirmation = askDeleteConfirmation;
    this._handleLikeClick = handleLikeClick;
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

  createCard(item, currentUserId) {
    this._element = this._getCardTemplate();
    const cardImage = this._element.querySelector('.element__photo'); 
    const cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__like');
    this._likesNumber = this._element.querySelector('.element__likes-number');
    this._deleteButton = this._element.querySelector('.element__trash');
    this._zoomButton = this._element.querySelector('.element__zoom');
    this._owner = item.owner._id;
    this._currentUserId = currentUserId;
    this._likes = item.likes;
    this._cardNumber = item._id

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;
    this._likesNumber.textContent = item.likes.length;

    // only card owner can delete it
    if (this._owner !== this._currentUserId) {
      this._deleteButton.style.display = 'none';
    };

    this.putLike(this._likes);
    this.deleteLike(this._likes);

    this._setEventListeners();
    
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  _handleDeleteClick() {
    this._askDeleteConfirmation(this._item._id);
  }

  _handleCardClick() {
    this._zoomImage(this._item);
  }

  _identifyLike() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id !== this._userId) {
        return true;
      }
    }
    return false;
  }

  putLike() {
    this._likeButton.classList.add('element__like_clicked');
  }

  deleteLike() {
    this._likeButton.classList.remove('element__like_clicked');
  }

  _setEventListeners() { 
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._cardNumber, this._identifyLike(), this);
    }); 
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick()); 
    this._zoomButton.addEventListener('click', () => this._handleCardClick());
  }
}