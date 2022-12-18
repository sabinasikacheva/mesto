const aboutPopup = document.querySelector('.popup');
const aboutButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-job');
const aboutCloseButton = document.querySelector('.popup__close-button');
const aboutSaveButton = document.querySelector('.popup__save-button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function openPopup() {
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  aboutPopup.classList.add('popup_opened');
}
aboutButton.addEventListener('click', openPopup);

function closePopup() {
  aboutPopup.classList.remove('popup_opened'); 
}
aboutCloseButton.addEventListener('click', closePopup);
aboutSaveButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 