// imports of modules
import { validationSettings, initialElements } from "../components/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

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

const addPopup = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  const newElement = { name: formData.title, link: formData.link };
  const cardElement = section._createCard(newElement, '.elements-template');
  section.addItem(cardElement);
  const likeButton = cardElement.querySelector('.element__button');
  const deleteButton = cardElement.querySelector('.element__trash');
  const zoomButton = cardElement.querySelector('.element__zoom');
      
  const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));

  const card = new Card(
    likeButton,
    deleteButton,
    zoomButton,
    cardElement,
    popupWithImage);

  card.setEventListeners();
});

addPopup.setEventListeners();


// validation of add form
const validators = {};
const forms = Array.from(document.querySelectorAll(validationSettings.formElement)); 

forms.forEach((formElement) => { 
  const validator = new FormValidator(validationSettings, formElement); 
  validator.enableValidation(); 
  validators[formElement.getAttribute('submitFormAdd')] = validator;
});