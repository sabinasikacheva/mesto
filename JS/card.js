import {
  popupCardImage,
  popupImage,
  popupCaption,
  popupImageClose,
} from "./Constants.js";

class Card {
  constructor(item, templateSelector, openImagePopup) {
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getElementFromTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _addEventListeners() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => this._deleteCard());
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => this._likeCard());
    this._cardImage
      .addEventListener("click", () => this._openImagePopup(this._name, this._link));
  }

  _deleteCard() {
    this._element.remove();
  }

  _likeCard(evt) {
    this._likeButton.classList.toggle("element__like_active");
  }

  createCard() {
    this._element = this._getElementFromTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector(".element__like");
    this._addEventListeners();
    return this._element;
  }
}
export default Card;