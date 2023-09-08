export class Card {
  constructor(element, handleCardClick) {
    this._element = element;
    this._handleCardClick = handleCardClick
  }

  createCard(item) {
    const cardTemplate = document.querySelector('.elements-template').content.querySelector('.element').cloneNode(true); 
    const cardImage = cardTemplate.querySelector('.element__photo'); 
    const cardTitle = cardTemplate.querySelector('.element__title');
    const likeButton = cardTemplate.querySelector('.element__button');
    const deleteButton = cardTemplate.querySelector('.element__trash');
    const zoomButton = cardTemplate.querySelector('.element__zoom');

    cardImage.src = item.link;
    cardImage.alt = 'На фото - ' + item.name;
    cardTitle.textContent = item.name;

    const setEventListeners = () => {
      likeButton.addEventListener('click', () => this._handleLikeClick(likeButton));
      deleteButton.addEventListener('click', () => this._handleDeleteClick(deleteButton));
      zoomButton.addEventListener('click', () => this._handleCardClick(item.link, item.name));
    };

    setEventListeners();
    
    return cardTemplate;
  }

  _handleLikeClick(likeButton) {
    likeButton.classList.toggle('element__button_clicked');
  }

  _handleDeleteClick(deleteButton) {
    const elementToRemove = deleteButton.closest('.element');
    elementToRemove.remove();
  }
}