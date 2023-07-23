// variables

const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const editPopupOpenButton = document.querySelector('.profile__button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileFormElement = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addPopupOpenButton = document.querySelector('.profile__button_type_add');
const profileBlock = document.querySelector('.profile');
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
    name: 'Восточная Сибирь',
    link: 'https://images.unsplash.com/photo-1590414731158-459a3c3d98ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1582220123432-6b1a42a6e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1414&q=80'
  }
];
const newList = initialElements;


// initial cards adding to DOM

const elementsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements-template').content;

function createByTemplate (element) {
  const eachElement = elementsTemplate.cloneNode(true);

  eachElement.querySelector('.element__title').textContent = element.name;
  eachElement.querySelector('.element__photo').src = element.link;

  elementsContainer.append(eachElement);
};

initialElements.forEach(createByTemplate);


// adding new cards by user

const submitNewElement = document.querySelector('.popup__form_type_add');
const imgTitleInput = document.querySelector('.popup__text_type_title');
const imgLinkInput = document.querySelector('.popup__text_type_link');

// функция добавления новой карточки в массив
function addToList (evt) {
  evt.preventDefault();
  const newElement = {name: imgTitleInput.value, link: imgLinkInput.value};
  newList.push(newElement);
  addPopup.classList.remove('popup_opened');
  return newList;
};

// функция отрисовки нового массива при добавлении нового элемента (без нового элемента будет отрисован исходный массив)
function drawNewList () {
  const eachNewElement = elementsTemplate.cloneNode(true);
  eachNewElement.querySelector('.element__title').textContent = imgTitleInput.value;
  eachNewElement.querySelector('.element__photo').src = imgLinkInput.value;
  elementsContainer.prepend(eachNewElement);
};

submitNewElement.addEventListener('submit', addToList);
submitNewElement.addEventListener('submit', drawNewList);


// removing cards by user

const removeButton = document.querySelector('.element__trash');
const removeButtons = document.querySelectorAll('.element__trash');

function removeElements (removeButton) {
  removeButton.addEventListener('click', function (evt) {
    const elementToRemove = evt.target.closest('.element');
    elementToRemove.remove();
  });
};

removeButtons.forEach(removeElements);


// likes

const like = document.querySelector('.element__button');
const likes = document.querySelectorAll('.element__button');

function putLikes (like) {
  like.addEventListener('click', function () {
    like.classList.toggle('element__button_clicked');
  });
};
likes.forEach(putLikes);


// changing profile data by user

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  editPopup.classList.remove('popup_opened');
}

profileFormElement.addEventListener('submit', handleFormSubmit);


// popups opening & closing

function openEditPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openAddPopup () {
  addPopup.classList.add('popup_opened');
}

const popupsCloseButton = document.querySelector('.popup__close');
const popupsCloseButtons = document.querySelectorAll('.popup__close');

function popupsClose(popupsCloseButton) {
  popupsCloseButton.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
  addPopup.classList.remove('popup_opened');
  });
};

popupsCloseButtons.forEach(popupsClose);
editPopupOpenButton.addEventListener('click', openEditPopup);
addPopupOpenButton.addEventListener('click', openAddPopup);


const zoomImgButton = document.querySelectorAll('.element__zoom');