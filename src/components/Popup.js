export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._button = this._element.querySelector(".popup__save-button")
  }

  openPopup() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
    
  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    });
  }

}
