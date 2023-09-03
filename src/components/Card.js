import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(likeButton, element, handleLikeClick, handleDeleteClick, handleCardClick) {
    this._likeButton = likeButton;
    this._element = element;
    this._likeClickHandler = handleLikeClick;
    this._deleteClickHandler = handleDeleteClick;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _handleDeleteClick() {
    this._element.remove();
  }
}

