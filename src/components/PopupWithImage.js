import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupImage = this._element.querySelector('.popup__image');
    this._popupCaption = this._element.querySelector('.popup__caption');
  }
 
  openImagePopup(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = name;
    super.openPopup();  
  }
   
}
