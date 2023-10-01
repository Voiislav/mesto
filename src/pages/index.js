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
import { PopupWithDeleteConfirmation } from "../components/PopupWithDeleteConfirmation.js";

//variables & class instances
const popupEditProfileOpenButton = document.querySelector('.profile__button_type_edit');
const popupAvatarOpenButton = document.querySelector('.profile__change-avatar');
const popupAddCardOpenButton = document.querySelector('.profile__button_type_add');
const userName = document.querySelector('#user-name');
const userJob = document.querySelector('#user-job');
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});
let currentUserId; // declaring a variable for the user's ID in the global scope
const validators = {};
const forms = Array.from(document.querySelectorAll(validationSettings.formElement));

const popupWithImage = new PopupWithImage(document.querySelector('.popup_type_image'));
popupWithImage.setEventListeners();

const popupConfirmDeleting = new PopupWithDeleteConfirmation(document.querySelector('.popup_type_confirm'));
popupConfirmDeleting.setEventListeners();



// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: 'db2e41a4-3852-40e2-9c01-18833418656f',
    'Content-Type': 'application/json'
  }
});

// user info & initial cards
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar, userData._id);
    currentUserId = userData._id;
    section.renderItems(cardsData)
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
  popupEditProfile.showSavingText(true);
  api.setNewUserData({ name, about: job })
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
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


// image popup
const zoomImage = (item) => {
  popupWithImage.open(item.link, item.name);
};


// likes
const handleLikeClick = (id, isLiked, card) => {
  if (isLiked) {
    api.deleteLike(id)
      .then((item) => {
        card.setLikes(item.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.putLike(id)
      .then((item) => {
        card.setLikes(item.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const createCard = (item, likes) => {
  const card = new Card({ item, zoomImage, askDeleteConfirmation, handleLikeClick, likes }, '.elements-template', currentUserId, item.likes);
  return card.createCard(item, item.likes);
};
  
const section = new Section({
  renderer: (item) => {
    const newCard = createCard(item, item.likes);
    section.addItem(newCard);
  }
}, '.elements');


// deleting cards
const askDeleteConfirmation = (id, card) => {
  popupConfirmDeleting.setSubmit(() => handlePopupConfirm(id, card))
  popupConfirmDeleting.open();
}

const handlePopupConfirm = (id, card) => {
  api.removeCard(id)
    .then(() => {
      card.deleteCard();
      popupConfirmDeleting.close();
    })
    .catch((err) => {
      console.log(err);
    });
}


//avatar changing
const popupChangeAvatar = new PopupWithForm(document.querySelector('.popup_type_change-avatar'), (formData) => {
  popupChangeAvatar.showSavingText(true);
  api.changeAvatar(formData)
    .then((userData) => {
      userInfo.setUserAvatar(userData.avatar);
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
  const avatarFormValidator = validators['popupFormAvatar'];
  avatarFormValidator.changeButtonState(false);
});

popupChangeAvatar.setEventListeners();


//new cards adding
const popupAddCard = new PopupWithForm(document.querySelector('.popup_type_add'), (formData) => {
  popupAddCard.showSavingText(true);
  api.addNewCard({ name: formData.title, link: formData.link })
    .then((newCard) => {
      const newCardElement = createCard(newCard, () => handleCardClick(newCard));
      section.prependItem(newCardElement);
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
forms.forEach((formElement) => { 
  const validator = new FormValidator(validationSettings, formElement);
  validators[formElement.getAttribute('name')] = validator;
});