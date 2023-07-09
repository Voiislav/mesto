// popup opening & closing (close button & submit button)

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button_edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_name');
const jobInput = document.querySelector('.popup__text_job');

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

const popupSubmitButton = document.querySelector('.popup__submit');

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

popupSubmitButton.addEventListener('click', handleFormSubmit);