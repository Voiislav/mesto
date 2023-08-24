// universal function: closing of closest to event

const closePopupByButton = (evt) => {
  const closingPopup = evt.target.closest('.popup');
  closePopup(closingPopup);
};


// closing by button "close"

const popupsCloseButton = document.querySelector('.popup__close');
const popupsCloseButtons = document.querySelectorAll('.popup__close');

const initPopupCloseButton = popupsCloseButton => {
  popupsCloseButton.addEventListener('click', closePopupByButton);
}

popupsCloseButtons.forEach(initPopupCloseButton);


// closing by click on overlay

const popupOverlay = document.querySelector('.popup');
const popupOverlays = document.querySelectorAll('.popup');

const initClosePopupOverlay = (evt) => {
  if (evt.target.closest('.popup__container')) {
    ;
  } else {
    closePopupByButton(evt)
  }
};

const closePopupByOverlayClick = (popupOverlay) => {
  popupOverlay.addEventListener('click', initClosePopupOverlay)
};

popupOverlays.forEach(closePopupByOverlayClick);


// close popup by Esc

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup(evt.currentTarget.querySelector('.popup_opened'));
  };
};


// changing profile data by user

const profileFormElement = document.querySelector('.popup__form_type_edit');

const handleFormSubmit = evt => {
  evt.preventDefault();  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
};

profileFormElement.addEventListener('submit', handleFormSubmit);


// all popups opening & closing (universal functions)

const editPopupOpenButton = document.querySelector('.profile__button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addPopupOpenButton = document.querySelector('.profile__button_type_add');
const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');

editPopupOpenButton.addEventListener('click', () => {re
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

export const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

addPopupOpenButton.addEventListener('click', () => {
  openPopup(addPopup);
  imgTitleInput.textContent = '';
  imgLinkInput.textContent = '';
  submitNewElement.setAttribute('disabled', true);
});

export const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};