import { popupCardImage, popupImage, popupCaption, popupImageClose} from "./constants.js";

class Card {
  constructor(item, template, openPopup) {
    this._name = item.name;
    this._link = item.link;
    this._template = template;
    this._openPopup = openPopup;
    }

  _getElementFromTemplate() {
    return document
    .querySelector('.element-template')
    .content.querySelector('.element')
    .cloneNode(true);
    }

  _addEventListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.element__like').addEventListener('click', () => this._likeCard());
    this._element.querySelector('.element__image').addEventListener('click', () => 
    this._handleOpenPopup());
    }

  _deleteCard() {
    this._element.remove();
    };

  _likeCard(evt) {
    this._likeButton.classList.toggle("element__like_active");
    };

  _handleOpenPopup(){
      popupImage.src = this._link;
      popupImage.alt = this._name;
      popupCaption.textContent = this._name;
      document.querySelector('.popup_type_image').classList.add('popup_opened');
  }
 
  createCard() {
    this._element = this._getElementFromTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector('.element__like');
    this._addEventListeners();
    return this._element;
    };
  
  }
  export default Card;