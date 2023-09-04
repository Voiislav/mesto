import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(likeButton, deleteButton, zoomButton, element, handleLikeClick, handleDeleteClick, handleCardClick) {
    this._likeButton = likeButton;
    this._deleteButton = deleteButton;
    this._zoomButton = zoomButton;
    this._element = element;
    this._likeClickHandler = handleLikeClick;
    this._deleteClickHandler = handleDeleteClick;
    this._cardClickHandler = handleCardClick;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleCardClick() {}


  setEventListeners() {
    this._likeButton.addEventListener('click', this._handleLikeClick.bind(this));
    this._deleteButton.addEventListener('click', this._handleDeleteClick.bind(this));
    this._zoomButton.addEventListener('click', this._handleCardClick.bind(this));
  }
}

