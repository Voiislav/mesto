// popup opening & closing

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button_edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_name');
const jobInput = document.querySelector('.popup__text_job');

function popupToggle() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


// submit

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggle();
}

formElement.addEventListener('submit', handleFormSubmit);

// likes

const like = document.querySelector('.element__button');
const likes = document.querySelectorAll('.element__button');

likes.forEach(function (like) {
  like.addEventListener('click', function() {
    like.classList.toggle('element__button_clicked');
  });
});