// imports of modules

import { validationSettings, initialElements } from "../components/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
// import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

//section rendering
const section = new Section({
  items: initialElements,
  renderer: cardElement => {
    section.addItem(cardElement);
  },
}, '.elements');

section.renderItems();


//edit & add popups
const handlePopups = (popup) => {
  const popupElement = new Popup(popup);
  popupElement.setEventListeners();
  popupElement.close();
};

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => handlePopups(popup));

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle'
});

const userData = userInfo.getUserInfo();

const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-job');

nameInput.value = userData.name;
jobInput.value = userData.job;

const editPopup = new PopupWithForm(document.querySelector('.popup_type_edit'), (formData) => {

  const nameElement = document.querySelector('.profile__title');
  const jobElement = document.querySelector('.profile__subtitle');

  nameElement.textContent = formData.name;
  jobElement.textContent = formData.job;
});

editPopup.setEventListeners();
// const editForm = document.querySelector('.popup__form_type_edit');
// editForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const newName = nameInput.value;
//   const newJob = jobInput.value;

//   userInfo.setUserInfo({
//     name: newName,
//     job: newJob,
//   });

//   const editPopup = editForm.closest('.popup');
//   handlePopups(editPopup);
// });

// const imageSelector = '.popup__image';
// const titleSelector = '.popup__title_type_image';
// const imagePopup = '.popup_type_image';

// const popupWithImage = new PopupWithImage(imagePopup, imageSelector, titleSelector);


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

// const addPopupOpenButton = document.querySelector('.profile__button_type_add');
// const addPopup = document.querySelector('.popup_type_add');

// addPopupOpenButton.addEventListener('click', () => {
//   openPopup(addPopup);
//   submitNewElement.reset();
// });