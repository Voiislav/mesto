// imports
import "../pages/index.css";
import { validationSettings, initialElements } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

//section rendering + image popup
const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));
popupWithImage.setEventListeners();

const handleCardClick = (item) => {
  popupWithImage.open(item.link, item.name);
};

const createCard = (item, handleCardClick) => {
  const card = new Card(item, handleCardClick);
  return card.createCard(item);
}

const section = new Section(
  { items: initialElements,
    renderer: item => createCard(item, () => handleCardClick(item))
  }, 
    '.elements');

section.renderItems();



//edit & add popups
const popupEditProfileOpenButton = document.querySelector('.profile__button_type_edit');
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');
const userName = document.querySelector('#user-name');
const userJob = document.querySelector('#user-job');

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
  userName.value = name;
  userJob.value = job;
  popupEditProfile.open();
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  const newElement = { name: formData.title, link: formData.link };
  const newCardElement = createCard(newElement, handleCardClick);
  section.addItem(newCardElement);
});

popupAddCard.setEventListeners();

popupAddCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  const addFormValidator = validators['submitFormAdd'];
  addFormValidator.changeButtonState(false);
});

//forms validation
const validators = {};
const forms = Array.from(document.querySelectorAll(validationSettings.formElement)); 

forms.forEach((formElement) => { 
  const validator = new FormValidator(validationSettings, formElement);
  validators[formElement.getAttribute('name')] = validator;
});