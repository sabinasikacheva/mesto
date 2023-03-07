import '../pages/index.css';
import { initialCards, validationList } from "../components/Data.js";
import {formElement, inputElement, buttonElement, nameInput, jobInput, popup, popupEditProfile,
  profEditButton, popupCloseButton, nameProfile, jobProfile, addCardButton, popupAddCard, addCardCloseButton,
  addCardForm, addCardName, addCardLink, cardsContainer, cardsTemplate, popupCardImage,
  popupImage, popupCaption, popupImageClose, popups } from "../components/Constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const profileValidator = new FormValidator (validationList, popupEditProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator (validationList, popupAddCard);
addCardValidator.enableValidation();
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  },
},
cardsContainer
);
cardList.renderItems();

function createCard(item) {
  const card = new Card(item, '.element-template',
  (name, link) => {popupPhoto.openImagePopup(name, link); });
  return card.createCard();
}
//функция добавления карточки в разметку
const addCard = (data) => {
  const newCard = createCard(data);
  cardList.addItem(newCard);
  popupCard.closePopup();
}
const handleFormSubmit = (data) => {
  user.setUserInfo(data);
  popupProfile.closePopup();

};

const popupCard = new PopupWithForm('.popup_type_card', addCard);
popupCard.setEventListeners();
const popupProfile = new PopupWithForm('.popup_type_profile', handleFormSubmit);
popupProfile.setEventListeners();
const popupPhoto = new PopupWithImage('.popup_type_image');
popupPhoto.setEventListeners();
const user = new UserInfo({ userName: '.profile__name', userInfo: '.profile__job'});

profEditButton.addEventListener('click', function () {
  popupProfile.openPopup();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  profileValidator.resetValidation();
});
addCardButton.addEventListener('click', function () {
  addCardForm.reset();
  popupCard.openPopup();
  addCardValidator.resetValidation();
});
