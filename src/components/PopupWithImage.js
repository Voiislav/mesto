import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this.popupImage = this._popup.querySelector('.popup__image');
    this.popupCaption = this._popup.querySelector('.popup__title_type_image');
  }

  open(link, name) {
    super.open();
    this.popupImage.src = link;
    this.popupImage.alt = 'На фото - ' + name;
    this.popupCaption.textContent = name;
  }
}