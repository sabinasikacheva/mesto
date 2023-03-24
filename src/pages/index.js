import '../pages/index.css';
import { validationList } from "../components/data.js";
import { changeAvatarButton, token, URL, formElement, inputElement, buttonElement, nameInput, jobInput, popup, popupEditProfile,
  profEditButton, popupCloseButton, popupChangeAvatar, nameProfile, jobProfile, profAddButton, popupAddCard, cardCloseButton,
  cardForm, cardName, cardLink, cardsContainer, cardsTemplate, popupCardImage,
  popupImage, popupCaption, popupImageClose, popups } from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-61',
  'fc848517-94b6-406d-9164-cc065e2b75b4'); 

let currentUserId;

Promise.all([api.getInitialCards(), api.getCurrentUser()])
  .then(([items, userData]) => {
    currentUserId = userData._id;
    cardList.renderItems(items);
    user.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section({
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  },
},
cardsContainer
);

function createCard(item) {
  const card = new Card(item, currentUserId, '.element-template', deleteCard,
  likeClick, (name, link) => {popupPhoto.openImagePopup(name, link); });
  return card.generateCard();
}

function deleteCard(id, element) {
  popupDeleteCard.openPopup();
  popupDeleteCard.setFormSubmitHandler(() => {
    return api.deleteCard(id)
      .then(() => {
        element.remove();
        popupDeleteCard.closePopup()
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  })
}
function likeClick(card) {
  const promise = card.isLiked(card) ? api.deleteLike(card._id) : api.setLike(card._id);
  promise
    .then((data) => {
      card.setLike(data);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
}

const addCard = (data, currentUserId) => {
  popupCard.renderLoading(true);
  api.createCard(data)
    .then((newData) => {
      const newCard = createCard(newData, currentUserId);
      cardList.addItem(newCard);
      popupCard.closePopup();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      popupCard.renderLoading(false);
    })
};

const handleFormSubmit = (item) => {
  popupProfile.renderLoading(true);
  api.setUserInfo(item)
    .then((data) => {
      user.setUserInfo(data);
      popupProfile.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((data) => {
      popupProfile.renderLoading(false);
    });
};

const changeAvatar = (item) => {
  popupChangePhotoAvatar.renderLoading(true);
  api.changeUserAvatar(item)
    .then((data) => {
      user.changeAvatarPicture(data);
      popupChangePhotoAvatar.closePopup();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      popupChangePhotoAvatar.renderLoading(false);
    });
  
}

const popupCard = new PopupWithForm('.popup_type_card', addCard);
popupCard.setEventListeners();
const popupProfile = new PopupWithForm('.popup_type_profile', handleFormSubmit);
popupProfile.setEventListeners();
const popupChangePhotoAvatar = new PopupWithForm('.popup_type_change-avatar', changeAvatar);
popupChangePhotoAvatar.setEventListeners();
const popupPhoto = new PopupWithImage('.popup_type_image');
popupPhoto.setEventListeners();
const popupDeleteCard = new PopupWithSubmit('.popup_type_delete-card');
popupDeleteCard.setEventListeners();

const user = new UserInfo({ userName: '.profile__name', userInfo: '.profile__job', userUrl: '.profile__avatar'});

changeAvatarButton.addEventListener('click', () => {
  popupChangePhotoAvatar.openPopup();
  changeAvatarValidator.resetValidation();
});

profEditButton.addEventListener('click', function () {
  popupProfile.openPopup();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  profileValidator.resetValidation();
});
profAddButton.addEventListener('click', function () {
  cardForm.reset();
  popupCard.openPopup();
  addCardValidator.resetValidation();
});

const profileValidator = new FormValidator (validationList, popupEditProfile);
profileValidator.enableValidation();
const addCardValidator = new FormValidator (validationList, popupAddCard);
addCardValidator.enableValidation();
const changeAvatarValidator = new FormValidator(validationList, popupChangeAvatar);
changeAvatarValidator.enableValidation();