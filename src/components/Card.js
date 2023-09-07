export class Card {
  constructor(element, zoomButton, handleCardClick) {
    this._element = element;
    // this._likeButton = likeButton;
    // this._likeClickHandler = handleLikeClick;
    // this._deleteButton = deleteButton;
    // this._deleteClickHandler = handleDeleteClick;
    this._zoomButton = zoomButton;
    this._cardClickHandler = handleCardClick;
  }

  _createCard(item) {
    const cardTemplate = document.querySelector('.elements-template').content.querySelector('.element').cloneNode(true); 
    const cardImage = cardTemplate.querySelector('.element__photo'); 
    const cardTitle = cardTemplate.querySelector('.element__title');

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;

    return cardTemplate;
  }

  // _handleLikeClick() {
  //   this._likeButton.classList.toggle('element__button_clicked');
  // }

  _handleDeleteClick() {
    this._element.remove();
  }

  setEventListeners() {
    // this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._zoomButton.addEventListener('click', this._cardClickHandler());
    // this._deleteButton.addEventListener('click', this._handleDeleteClick());
  }
}