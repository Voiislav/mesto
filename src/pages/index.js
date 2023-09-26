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

// API
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    'Content-Type': 'application/json'
  }
});

// user info
const popupEditProfileOpenButton = document.querySelector('.profile__button_type_edit');
const userName = document.querySelector('#user-name');
const userJob = document.querySelector('#user-job');

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

popupEditProfileOpenButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  userName.value = name;
  userJob.value = job;
  popupEditProfile.open();
});
  
const popupEditProfile = new PopupWithForm(document.querySelector('.popup_type_edit'), (formData) => {
  const name = formData.name;
  const job = formData.job;
  api.setNewUserData({ name, about: job })
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    });
});  
popupEditProfile.setEventListeners(); 
  


//initial cards + image popup
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

const handleDeleteConfirmation = () => {
  popupConfirmDeleting.open();
};

const createCard = (item, handleCardClick) => {
  const card = new Card(item, handleCardClick, handleDeleteConfirmation);
  return card.createCard(item);
}

const popupConfirmDeleting = new PopupWithForm(document.querySelector('.popup_type_confirm'));
popupConfirmDeleting.setEventListeners();

//avatar BETA
const popupAvatarOpenButton = document.querySelector('.profile__change-avatar');
const popupAvatar = new PopupWithForm(document.querySelector('.popup_type_change-avatar'));
popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatar.open();
});

popupAvatar.setEventListeners();

//adding new cards
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');

const popupAddCard = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  api.addNewCard({ name: formData.title, link: formData.link })
    .then((newCard) => {
      const newCardElement = createCard(newCard, () => handleCardClick(newCard));
      section.addItem(newCardElement);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
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