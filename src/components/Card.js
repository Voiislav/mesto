export class Card {
  constructor(item, zoomImage, askDeleteConfirmation, element) {
    this._element = element;
    this._zoomImage = zoomImage;
    this._askDeleteConfirmation = askDeleteConfirmation;
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

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;
    this._likesNumber.textContent = item.likes.length;

    // only card owner can delete it
    if (this._owner !== this._currentUserId) {
      this._deleteButton.style.display = 'none';
    };

    this._setEventListeners();
    
    return this._element;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__like_clicked');
  }

  _handleDeleteClick() {
    this._askDeleteConfirmation(this._item._id);
  }

  _handleCardClick() {
    this._zoomImage(this._item);
  }

  _setEventListeners() { 
    this._likeButton.addEventListener('click', () => this._handleLikeClick()); 
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick()); 
    this._zoomButton.addEventListener('click', () => this._handleCardClick());
  }
}

 // _updateLikesNumber(likes) {
  //   this._likesNumber.textContent = likes.length;
  // }