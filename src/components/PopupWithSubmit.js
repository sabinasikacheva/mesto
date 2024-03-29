import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._form = this._element.querySelector('.popup__form');
  }
  
setFormSubmitHandler(handler) {
    this.formSubmitHandler = handler;
  }

setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.formSubmitHandler();
    });
  }
     
}
