// imports
import "../pages/index.css";
import { validationSettings } from "../utils/constants.js";
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
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});

let currentUserId; // declaring a variable for the user's ID in the global scope

api.getUserData() 
  .then((userData) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar, userData._id);
    currentUserId = userData._id;
  })
  .catch((err) => {
    console.log(err);
  });

popupEditProfileOpenButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  const userName = document.querySelector('#user-name');
  const userJob = document.querySelector('#user-job');
  userName.value = name;
  userJob.value = job;
  popupEditProfile.open();
});
  
const popupEditProfile = new PopupWithForm(document.querySelector('.popup_type_edit'), (formData) => {
  const name = formData.name;
  const job = formData.job;
  popupEditProfile.showSavingText(true);
  api.setNewUserData({ name, about: job })
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.showSavingText(false);
    })
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
  section.renderItems(cardsData);
})
.catch((err) => {
  console.log(err);
});

const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));
popupWithImage.setEventListeners();

const zoomImage = (item) => {
  popupWithImage.open(item.link, item.name);
};

const askDeleteConfirmation = () => {
  popupConfirmDeleting.open();
};

const createCard = (item) => {
  const card = new Card(item, zoomImage, askDeleteConfirmation);
  return card.createCard(item, currentUserId);
}

// cards deleting 
const popupConfirmDeleting = new PopupWithForm(document.querySelector('.popup_type_confirm'));
popupConfirmDeleting.setEventListeners();



//avatar changing
const popupAvatarOpenButton = document.querySelector('.profile__change-avatar');
const popupChangeAvatar = new PopupWithForm(document.querySelector('.popup_type_change-avatar'), (formData) => {
  popupChangeAvatar.showSavingText(true);
  api.changeAvatar(formData)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupChangeAvatar.showSavingText(false);
    })
});

popupAvatarOpenButton.addEventListener('click', () => {
  popupChangeAvatar.open();
});

popupChangeAvatar.setEventListeners();


//new cards adding
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');
const popupAddCard = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  popupAddCard.showSavingText(true);
  api.addNewCard({ name: formData.title, link: formData.link })
    .then((newCard) => {
      const newCardElement = createCard(newCard, () => handleCardClick(newCard));
      section.addItem(newCardElement);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.showSavingText(false);
    })
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