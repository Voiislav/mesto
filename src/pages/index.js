// imports
import "../pages/index.css";
import { validationSettings, initialElements } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Api } from "../components/Api.js";


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    'Content-Type': 'application/json'
  }
});

// user info
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});

api.getUserData() 
  .then((userData) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
  })
  .catch((err) => {
    console.log(err);
  });


//section rendering + image popup
const section = new Section({
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);
  }
}, '.elements');

api.getInitialCards()
.then((cardsData) => {
  console.log(cardsData);
  section.renderItems(cardsData);
})
.catch((err) => {
  console.log(err);
});


const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));
popupWithImage.setEventListeners();

const handleCardClick = (item) => {
  popupWithImage.open(item.link, item.name);
};

const createCard = (item, handleCardClick) => {
  const card = new Card(item, handleCardClick);
  return card.createCard(item);
}
  
  
//edit & add popups
const popupEditProfileOpenButton = document.querySelector('.profile__button_type_edit');
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');
const userName = document.querySelector('#user-name');
const userJob = document.querySelector('#user-job');


//avatar BETA
const popupAvatarOpenButton = document.querySelector('.profile__change-avatar');
const popupAvatar = new PopupWithForm(document.querySelector('.popup_type_change-avatar'));
popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatar.open();
});

popupAvatar.setEventListeners();

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
  const newCardElement = createCard(newElement, () => handleCardClick(newElement));
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