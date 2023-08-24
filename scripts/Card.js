const imagePopupPhoto = document.querySelector('.popup__image');
const imagePopupTitle = document.querySelector('.popup__title_type_image');
const imagePopup = document.querySelector('.popup_type_image');

import { initialElements } from "../scripts/initialElements.js";
import { openPopup } from "../scripts/index.js";

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = "На фото - " + this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._likeButton = this._element.querySelector('.element__button');
    this._removeButton = this._element.querySelector('.element__trash');
    this._zoomButton = this._element.querySelector('.element__zoom');

    return this._element;
  }

  _likeHandler() {
    this._likeButton.classList.toggle('element__button_clicked');
  }

  _removeHandler(evt) {
    const elementToRemove = evt.target.closest('.element');
    elementToRemove.remove();
  }

  _zoomImageHandler() {
    imagePopupPhoto.src = this._link;
    imagePopupPhoto.alt = "На фото - " + this._name;
    imagePopupTitle.textContent = this._name;
    openPopup(imagePopup);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeHandler ();
    })
    this._removeButton.addEventListener('click', (evt) => {
      this._removeHandler (evt);
    })
    this._zoomButton.addEventListener('click', () => {
      this._zoomImageHandler();
    })
  }

  static createCardElement(data, templateSelector) {
    const card = new Card(data, templateSelector);
    const cardElement = card._createCard();
    card._setEventListeners();
    return cardElement;
  }
}

initialElements.forEach((initialElement) => {
  const cardElement = Card.createCardElement(initialElement, '.elements-template');
  document.querySelector('.elements').append(cardElement);
});

const submitNewElement = document.querySelector('.popup__form_type_add');
const submitButton = document.querySelector('.popup__submit_type_add');
const imgTitleInput = document.querySelector('.popup__text_type_title');
const imgLinkInput = document.querySelector('.popup__text_type_link');
const elementsContainer = document.querySelector('.elements');

import { closePopup } from "../scripts/index.js";
import { addPopup } from "../scripts/index.js";

const addNewElement = evt => {
  evt.preventDefault();
  const newElement = { name: imgTitleInput.value, link: imgLinkInput.value };
  const cardElement = Card.createCardElement(newElement, '.elements-template');
  elementsContainer.prepend(cardElement);
  submitNewElement.reset();
  closePopup(addPopup);
  submitButton.setAttribute('disabled', true);
};

submitNewElement.addEventListener('submit', addNewElement);

