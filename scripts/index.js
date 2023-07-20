// variables

const editPopup = document.querySelector('.popup');
const addPopup = document.querySelector('.add-popup');
const popupOpenButton = document.querySelector('.profile__button_type_edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addPopupOpenButton = document.querySelector('.profile__button_type_add');
const addPopupCloseButton = document.querySelector('.add-popup__close');
const profileBlock = document.querySelector('.profile');
const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements-template').content;
const initialElements = [
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1631775866694-fe340840cc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1678&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1579677359441-a59fa83ecc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1557094005-176cbfe3554d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80'
  },
  {
    name: 'Териберка',
    link: 'https://images.unsplash.com/photo-1633780311223-7b6ffbd5a801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1582220123432-6b1a42a6e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1414&q=80'
  }
];
const like = document.querySelector('.element__button');
const likes = document.querySelectorAll('.element__button');
const imgTitleInput = document.querySelector('.add-popup__text_type_title');
const imgLinkInput = document.querySelector('.add-popup__text_type_link');
const deleteCardButton = document.querySelectorAll('.element__trash');



// initial cards adding

initialElements.forEach(function (element) {
  const eachElement = elementsTemplate.cloneNode(true);

  eachElement.querySelector('.element__title').textContent = element.name;
  eachElement.querySelector('.element__photo').src = element.link;

  elementsContainer.append(eachElement);
});


// popups opening & closing

function popupOpen() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {
  editPopup.classList.remove('popup_opened');
}

function openAddPopup () {
  addPopup.classList.add('popup_opened');
}

function closeAddPopup () {
  addPopup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', popupOpen);
addPopupOpenButton.addEventListener('click', openAddPopup);
addPopupCloseButton.addEventListener('click', closeAddPopup);
popupCloseButton.addEventListener('click', popupClose);


// submits

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);


// likes

likes.forEach(function (like) {
  like.addEventListener('click', function() {
    like.classList.toggle('element__button_clicked');
  });
});

// adding new cards by user




// deleting cards by user


