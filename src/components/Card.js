export class Card {
  constructor(element, likeButton) {
    this._element = element;
    this._likeButton = likeButton;
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

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    console.log(this._likeButton);
  }
}