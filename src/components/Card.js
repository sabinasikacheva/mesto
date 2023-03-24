class Card {
  constructor(data, currentUserId, templateSelector, deleteCardApi, likeClick, openImagePopup) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId;
    this._templateSelector = templateSelector;
    this._deleteCardApi = deleteCardApi;
    this._likeClick = likeClick;
    this._openImagePopup = openImagePopup;
  }

  _getElementFromTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }
  _getVisibleTrash() {
    if (this._ownerId === this._currentUserId) {
      this._element.querySelector('.element__trash').classList.add('element__trash_active');
    }
  }
  _addEventListeners() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => this._deleteCard());
    this._likeButton
      .addEventListener("click", () => this._likeClick(this));
    this._cardImage
      .addEventListener("click", () => this._openImagePopup(this._name, this._link));
  }

  _deleteCard() {
    this._deleteCardApi(this._id, this._element);
  };

  isLiked() {
    return this._isLiked;
  }

  setLike(data) {
    this._isLiked = data.likes.filter((item) => { return item._id == this._currentUserId; }).length > 0;
    this._counter.textContent = data.likes.length;
    if (this._isLiked) {
      this._likeButton.classList.add("element__like_active");
    } else {
      this._likeButton.classList.remove("element__like_active");
    }
  }

  generateCard() {
    this._element = this._getElementFromTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector(".element__like");
    this._counter = this._element.querySelector(".element__like-count");

    this._likes.forEach(elem => {
      if (elem._id === this._currentUserId) {
        this._likeButton.classList.add("element__like_active");
      }
    });

    this._addEventListeners();
    this._getVisibleTrash();
    this._counter.textContent = this._likes.length;
    return this._element;
  }
}
export default Card;