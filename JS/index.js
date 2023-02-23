import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, validationList } from "./data.js";

import {formElement, inputElement, buttonElement, nameInput, jobInput, popup, popupEditProfile,
  profEditButton, popupCloseButton, nameProfile, jobProfile, addCardButton, popupAddCard, addCardCloseButton,
  addCardForm, addCardName, addCardLink, cardsContainer, cardsTemplate, popupCardImage,
  popupImage, popupCaption, popupImageClose, popups } from "./constants.js";

const profileValidator = new FormValidator (validationList, popupEditProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator (validationList, popupAddCard);
addCardValidator.enableValidation()

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
}
function openEditProfile () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditProfile);
}
function handleFormSubmitProfile (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmitProfile);

profEditButton.addEventListener('click', function () {
  formElement.reset();
  profileValidator.resetValidation();
  openPopup(popupEditProfile);
});
addCardButton.addEventListener('click', function () {
  addCardForm.reset();
  addCardValidator.resetValidation();
  openPopup(popupAddCard);
})
// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
}
popupCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
addCardCloseButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});
popupImageClose.addEventListener("click", function () {
  closePopup(popupCardImage);
});

function closeEsc(event) {
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}
function closeOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
   const activePopup = document.querySelector('.popup_opened');
  closePopup(activePopup);
}
};
popups.forEach((popup) => {
  popup.addEventListener('mousedown', closeOverlay)
  })
// Функция создания карточки через класс
function createCard(item) {
  const card = new Card(item, '.element-template');
  return card.createCard();
}
function renderCards() {
  initialCards.forEach(item => {
    const newCard = createCard(item);
    cardsContainer.append(newCard);
  });
}
renderCards();

addCardForm.addEventListener('submit', addCard);

//функция добавления карточки в разметку
function addCard(evt) {
  evt.preventDefault();
  const inputs = {};
  inputs.name = addCardName.value;
  inputs.link = addCardLink.value;
  const card = createCard(inputs);
  cardsContainer.prepend(card);
  closePopup(popupAddCard);
  addCardForm.reset();
}
