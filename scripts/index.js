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
  const likes = eachElement.querySelectorAll('.element__button');


  const putLikes = like => {
    like.addEventListener('click', function () {
      like.classList.toggle('element__button_clicked');
    });
  };

  likes.forEach(putLikes);

  // removing cards by user (listener)

  const removeButton = eachElement.querySelector('.element__trash');
  const removeButtons = eachElement.querySelectorAll('.element__trash');

  const removeElements = removeButton => {
    removeButton.addEventListener('click', function (evt) {
      const elementToRemove = evt.target.closest('.element');
      elementToRemove.remove();
    });
  };

  removeButtons.forEach(removeElements);

  // image popups (listener)

  const openImagePopupButton = eachElement.querySelector('.element__zoom');
  const openImagePopupButtons = eachElement.querySelectorAll('.element__zoom');
  const elementPhoto = eachElement.querySelector('.element__photo');
  const elementTitle = eachElement.querySelector('.element__title');

  const openImagePopups = openImagePopupButton => {
    openImagePopupButton.addEventListener('click', function (openImagePopupButton) {
      const elementToLoad = openImagePopupButton.target.closest('.element');
      const photoToLoad = elementToLoad.querySelector('.element__photo');
      const titleToLoad = elementToLoad.querySelector('.element__title');
      imagePopupPhoto.src = photoToLoad.src;
      imagePopupPhoto.alt = 'На фото - ' + titleToLoad.textContent;
      imagePopupTitle.textContent = titleToLoad.textContent;
      openImagePopup();
    });
  };
  openImagePopupButtons.forEach(openImagePopups);

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
const addPopup = document.querySelector('.popup_type_add');

const addNewElement = evt => {
  evt.preventDefault();
  const newElement = {name: imgTitleInput.value, link: imgLinkInput.value};
  elementsContainer.prepend(createElement(newElement));
  submitNewElement.reset();
  addPopup.classList.remove('popup_opened');
};

submitNewElement.addEventListener('submit', addNewElement);

// popups closing

const popupsCloseButton = document.querySelector('.popup__close');
const popupsCloseButtons = document.querySelectorAll('.popup__close');

const initPopupCloseButton = popupsCloseButton => {
  const popupToCloseByButton = popupsCloseButton.target.closest('.popup');
  popupToCloseByButton.classList.remove('popup_opened');
};

const popupClose = popupsCloseButton => {
  popupsCloseButton.addEventListener('click', initPopupCloseButton);
};

popupsCloseButtons.forEach(popupClose);



// changing profile data by user

const profileFormElement = document.querySelector('.popup__form_type_edit');

const handleFormSubmit = evt => {
  evt.preventDefault();  
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;  
  editPopup.classList.remove('popup_opened');
};

profileFormElement.addEventListener('submit', handleFormSubmit);


// edit/add popups opening & all popups closing 

const editPopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');
const editPopupOpenButton = document.querySelector('.profile__button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addPopupOpenButton = document.querySelector('.profile__button_type_add');

const addInputsInitialValue = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

const openEditPopup = () => {
  editPopup.classList.add('popup_opened');
  addInputsInitialValue();
};

const openAddPopup = () => {
  addPopup.classList.add('popup_opened');
};

const openImagePopup = () => {
  imagePopup.classList.add('popup_opened');
}

editPopupOpenButton.addEventListener('click', openEditPopup);

addPopupOpenButton.addEventListener('click', openAddPopup);


