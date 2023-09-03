import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, imageSelector, titleSelector) {
    super(popup);
    this._image = this.popup.querySelector(imageSelector);
    this._title = this.popup.querySelector(titleSelector);
  }

  open(imageLink, imageName) {
    super.open();
    this._image.src = imageLink;
    this._title.textContent = imageName;
  }
}