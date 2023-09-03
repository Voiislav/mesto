import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";

export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
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

  renderItems() {
    this._items.forEach(item => {
      const cardElement = this._createCard(item);
      const likeButton = cardElement.querySelector('.element__button');
      const card = new Card(
        likeButton,
        cardElement,
        () => this._handleLikeClick(cardElement),
        () => this._handleDeleteClick(cardElement)
      );

      likeButton.addEventListener('click', () => card._handleLikeClick());
      cardElement.querySelector('.element__trash').addEventListener('click', () => card._handleDeleteClick());

      this._renderer(cardElement);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}