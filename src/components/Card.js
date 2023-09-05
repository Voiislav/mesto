import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(likeButton, deleteButton, zoomButton, element, handleLikeClick, handleDeleteClick, handleCardClick, popupWithimage) {
    this._likeButton = likeButton;
    this._deleteButton = deleteButton;
    this._zoomButton = zoomButton;
    this._element = element;
    this._likeClickHandler = handleLikeClick;
    this._deleteClickHandler = handleDeleteClick;
    this._cardClickHandler = handleCardClick;
    this._popupWithImage = popupWithimage;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleCardClick() {
    const imageLink = this._element.querySelector('.element__photo').src;
    const imageTitle = this._element.querySelector('.element__title').textContent;
    const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));
    popupWithImage.open(imageLink, imageTitle);
  }


  setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
    this._deleteButton.addEventListener('click', this._handleDeleteClick.bind(this));
    this._zoomButton.addEventListener('click', this._handleCardClick.bind(this));
  }
}

