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

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
}
function openEditProfile () {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
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
  removeError(popupEditProfile, validationList);
  openPopup(popupEditProfile);
});
addCardButton.addEventListener('click', function () {
  addCardForm.reset();
  removeError(popupAddCard, validationList);
  openPopup(popupAddCard);
})
// Функция закрытия попапа
function closePopup(a) {
  a.classList.remove('popup_opened');
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
// Функция создания карточки
function createCard({name, link}) {
  const card = cardsTemplate.cloneNode(true);
  const cardName = card.querySelector('.element__title');
  const cardImage = card.querySelector('.element__image');
  const deleteButton = card.querySelector('.element__trash');
  const likeButton = card.querySelector('.element__like');
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  function deleteCard(event) {
    event.target.closest('.element').remove();
    }
    deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__like_active");
  });

  cardImage.addEventListener("click", function () {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openPopup(popupCardImage);
  });
  return card;
}
function renderCards() {
  initialCards.forEach(item => {
    const newCard = createCard(item);
    cardsContainer.append(newCard);
  });
}
renderCards();

addCardForm.addEventListener('submit', addCard);

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
