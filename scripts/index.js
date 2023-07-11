// variables

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button_type_edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const like = document.querySelector('.element__button');
const likes = document.querySelectorAll('.element__button');

// popup opening & closing

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popupOpenButton.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupClose);


// submit

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