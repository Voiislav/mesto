// imports
import "../pages/index.css";
import { validationSettings, initialElements } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

//section rendering
const handleCardClick = () => {
  const imageLink = this._element.querySelector('.element__photo').src; 
    const imageTitle = this._element.querySelector('.element__title').textContent; 
    const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image')); 
    popupWithImage.open(imageLink, imageTitle); 
} 

const section = new Section(
  {
    items: initialElements,
    renderer: item => {
      const card = new Card(item);
      return card._createCard(item);
  },
},
'.elements'
);
section.renderItems();


//edit & add popups
const popupEditProfileOpenButton = document.querySelector('.profile__button_type_edit');
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle'
});

const popupEditProfile = new PopupWithForm(document.querySelector('.popup_type_edit'), (formData) => {
  const name = formData.name;
  const job = formData.job;
  userInfo.setUserInfo({ name, job });
});

popupEditProfileOpenButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  document.querySelector('#user-name').value = name;
  document.querySelector('#user-job').value = job;
  popupEditProfile.open();
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  const newElement = { name: formData.title, link: formData.link };
  const newCard = new Card(newElement);
  const newCardElement = newCard._createCard(newElement);
  section.addItem(newCardElement);
});

popupAddCard.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  const addFormValidator = validators['submitFormAdd'];
  addFormValidator.changeButtonState(false);
});

// forms validation
const validators = {};
const forms = Array.from(document.querySelectorAll(validationSettings.formElement)); 

forms.forEach((formElement) => { 
  const validator = new FormValidator(validationSettings, formElement);
  validators[formElement.getAttribute('name')] = validator;
});