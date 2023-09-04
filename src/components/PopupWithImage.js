import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, image, title) {
    super(popup);
    this._image = image;
    this._title = title;
  }
}