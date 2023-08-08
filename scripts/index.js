// creating cards

const elementsTemplate = document.querySelector('.elements-template').content;
const elementsContainer = document.querySelector('.elements');
const imagePopupTitle = document.querySelector('.popup__title_type_image');
const imagePopupPhoto = document.querySelector('.popup__image');

const createElement = element => {
  const eachElement = elementsTemplate.cloneNode(true);
  eachElement.querySelector('.element__title').textContent = element.name;
  eachElement.querySelector('.element__photo').src = element.link;
  eachElement.querySelector('.element__photo').alt = 'На фото - ' + element.name;

  // likes (listener)

  const like = eachElement.querySelector('.element__button');

  like.addEventListener('click', () => {
      like.classList.toggle('element__button_clicked');
  });


  // removing cards by user (listener)

  const removeButton = eachElement.querySelector('.element__trash');

  removeButton.addEventListener('click', (evt) => {
    const elementToRemove = evt.target.closest('.element');
    elementToRemove.remove();
  });


  // image popups (listener)

  const openImagePopupButton = eachElement.querySelector('.element__zoom');
  const imagePopup = document.querySelector('.popup_type_image');

  openImagePopupButton.addEventListener('click', (openImagePopupButton) => {
    const elementToLoad = openImagePopupButton.target.closest('.element');
    const photoToLoad = elementToLoad.querySelector('.element__photo');
    const titleToLoad = elementToLoad.querySelector('.element__title');
    imagePopupPhoto.src = photoToLoad.src;
    imagePopupPhoto.alt = 'На фото - ' + titleToLoad.textContent;
    imagePopupTitle.textContent = titleToLoad.textContent;
    openPopup(imagePopup);
  });

  return eachElement;
};

const addInitialElement = element => {
  const initialElement = createElement(element);  
  elementsContainer.append(initialElement);
};

initialElements.forEach(addInitialElement);

// adding new cards by user

const submitNewElement = document.querySelector('.popup__form_type_add');
const imgTitleInput = document.querySelector('.popup__text_type_title');
const imgLinkInput = document.querySelector('.popup__text_type_link');

const addNewElement = evt => {
  evt.preventDefault();
  const newElement = {name: imgTitleInput.value, link: imgLinkInput.value};
  elementsContainer.prepend(createElement(newElement));
  submitNewElement.reset();
  closePopup(addPopup);
};

submitNewElement.addEventListener('submit', addNewElement);


// popups closing (close button, click on overlay):

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
const addPopup = document.querySelector('.popup_type_add');
const submitButtonInactive = document.querySelector('.popup__submit_disabled');

editPopupOpenButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
});

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

addPopupOpenButton.addEventListener('click', () => {
  openPopup(addPopup);
  imgTitleInput.textContent = '';
  imgLinkInput.textContent = '';
  submitButtonInactive.classList.add('popup__submit_disabled');
  submitButtonInactive.setAttribute('disabled', true);
});

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};