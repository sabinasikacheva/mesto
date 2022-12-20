// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__form-text_type_name');
const jobInput = document.querySelector('.popup__form-text_type_job');
const aboutPopup = document.querySelector('.popup');
const aboutButton = document.querySelector('.profile__edit-button');
const aboutCloseButton = document.querySelector('.popup__close-button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function openPopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  aboutPopup.classList.add('popup_opened');
}
function closePopup() {
  aboutPopup.classList.remove('popup_opened'); 
}
// Обработчик «отправки» формы
function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

aboutButton.addEventListener('click', openPopup);
aboutCloseButton.addEventListener('click', closePopup);