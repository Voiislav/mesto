// imports of modules

import { validationSettings } from "../scripts/constants.js";
import { initialElements } from "../scripts/constants.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";


// click on image -> zoom

const imagePopupPhoto = document.querySelector('.popup__image');
const imagePopupTitle = document.querySelector('.popup__title_type_image');
const imagePopup = document.querySelector('.popup_type_image');

const handleOpenImagePopup = (name, link) => {
  imagePopupPhoto.src = link;
  imagePopupPhoto.alt = "На фото -" + name;
  imagePopupTitle.textContent = name;
  openPopup(imagePopup);
};

// rendering of initial cards

initialElements.forEach((initialElement) => {
  const cardElement = Card.createCardElement(initialElement, '.elements-template', handleOpenImagePopup);
  document.querySelector('.elements').append(cardElement);
});

// adding new cards by user

const submitNewElement = document.querySelector('.popup__form_type_add');
const imgTitleInput = document.querySelector('.popup__text_type_title');
const imgLinkInput = document.querySelector('.popup__text_type_link');
const elementsContainer = document.querySelector('.elements');

const addNewElement = evt => {
  evt.preventDefault();
  const newElement = { name: imgTitleInput.value, link: imgLinkInput.value };
  const cardElement = Card.createCardElement(newElement, '.elements-template');
  elementsContainer.prepend(cardElement);
  submitNewElement.reset();
  closePopup(addPopup);
};

submitNewElement.addEventListener('submit', addNewElement);

// validation of add form

const validators = {};
const forms = Array.from(document.querySelectorAll(validationSettings.formElement)); 

forms.forEach((formElement) => { 
  const validator = new FormValidator(validationSettings, formElement); 
  validator.enableValidation(); 
  validators[formElement.getAttribute('submitFormAdd')] = validator;
});

validators[submitNewElement.getAttribute('submitFormAdd')].changeButtonState();

// universal function: closing of closest to event

const closePopupByButton = evt => {
  const closingPopup = evt.target.closest('.popup');
  closePopup(closingPopup);
};


// popups closing by button "close"

const popupsCloseButtons = document.querySelectorAll('.popup__close');

const initPopupCloseButton = popupsCloseButton => {
  popupsCloseButton.addEventListener('click', closePopupByButton);
}

popupsCloseButtons.forEach(initPopupCloseButton);


// popups closing by click on overlay

const popupOverlays = document.querySelectorAll('.popup');

const closePopupByOverlay = evt => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.currentTarget)
  }
}

const initClosePopupByOverlayClick = (popupOverlay) => {
  popupOverlay.addEventListener('click', closePopupByOverlay)
}

popupOverlays.forEach(initClosePopupByOverlayClick);


// close popup by Esc

const closePopupByEsc = evt => {
  if (evt.key === 'Escape') {
    closePopup(evt.currentTarget.querySelector('.popup_opened'));
  };
};

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};


// changing profile data by user

const profileFormElement = document.querySelector('.popup__form_type_edit');

const handleFormSubmitEdit = evt => {
  evt.preventDefault();  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
};

profileFormElement.addEventListener('submit', handleFormSubmitEdit);


// edit/add popups opening & closing (universal functions)

const editPopupOpenButton = document.querySelector('.profile__button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addPopupOpenButton = document.querySelector('.profile__button_type_add');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');

editPopupOpenButton.addEventListener('click', () => {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

addPopupOpenButton.addEventListener('click', () => {
  openPopup(addPopup);
  submitNewElement.reset();
});