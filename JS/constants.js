const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');
const buttonElement = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_profile');
const profEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_card');
const addCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('.popup__form');
const addCardName = popupAddCard.querySelector('.popup__input_type_name');
const addCardLink = popupAddCard.querySelector('.popup__input_type_link');
const cardsContainer = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template').content;
const popupCardImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupImageClose = popupCardImage.querySelector('.popup__close-button');
const popups = Array.from(document.querySelectorAll('.popup'));

export { formElement, inputElement, buttonElement, nameInput, jobInput, popup, popupEditProfile,
profEditButton, popupCloseButton, nameProfile, jobProfile, addCardButton, popupAddCard, addCardCloseButton,
addCardForm, addCardName, addCardLink, cardsContainer, cardsTemplate, popupCardImage,
popupImage, popupCaption, popupImageClose, popups }; 