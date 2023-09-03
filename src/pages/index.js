// imports of modules

import { validationSettings } from "../components/constants.js";
import { initialElements } from "../components/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";

//section rendering
const section = new Section({
  items: initialElements,
  renderer: cardElement => {
    section.addItem(cardElement);
  },
}, '.elements');

section.renderItems();


//edit & add popups
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  const popupElement = new Popup(popup);
  popupElement.setEventListeners();
  popupElement.close();
});



// click on image -> zoom

// const imagePopupPhoto = document.querySelector('.popup__image');
// const imagePopupTitle = document.querySelector('.popup__title_type_image');
// const imagePopup = document.querySelector('.popup_type_image');

// const handleOpenImagePopup = (name, link) => {
//   imagePopupPhoto.src = link;
//   imagePopupPhoto.alt = "На фото -" + name;
//   imagePopupTitle.textContent = name;
//   openPopup(imagePopup);
// };

// rendering of initial cards

// initialElements.forEach((initialElement) => {
//   const cardElement = Card.createCardElement(initialElement, '.elements-template');
//   document.querySelector('.elements').append(cardElement);
// });

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


// changing profile data by user

const profileFormElement = document.querySelector('.popup__form_type_edit');

const handleFormSubmitEdit = evt => {
  evt.preventDefault();  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
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
};

addPopupOpenButton.addEventListener('click', () => {
  openPopup(addPopup);
  submitNewElement.reset();
});