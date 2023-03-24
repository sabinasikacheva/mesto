const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');
const buttonElement = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_profile');
const profEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const profAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const cardCloseButton = popupAddCard.querySelector('.popup__close-button');
const cardForm = popupAddCard.querySelector('.popup__form');
const cardName = popupAddCard.querySelector('.popup__input_type_name');
const cardLink = popupAddCard.querySelector('.popup__input_type_link');
const cardsContainer = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template').content;
const popupCardImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupImageClose = popupCardImage.querySelector('.popup__close-button');
const popups = Array.from(document.querySelectorAll('.popup'));
const changeAvatarButton = document.querySelector('.profile__avatar-changer');
const token = 'fc848517-94b6-406d-9164-cc065e2b75b4';
const URL = 'https://mesto.nomoreparties.co/v1/cohort-61/';

export { changeAvatarButton, token, URL, formElement, inputElement, buttonElement, nameInput, jobInput, popup, popupEditProfile,
profEditButton, popupCloseButton, popupChangeAvatar, popupDeleteCard, nameProfile, jobProfile, profAddButton, popupAddCard, cardCloseButton,
cardForm, cardName, cardLink, cardsContainer, cardsTemplate, popupCardImage,
popupImage, popupCaption, popupImageClose, popups }; 