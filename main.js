(()=>{"use strict";var t={formElement:".popup__form",formInput:".popup__text",submitButtonSelector:".popup__submit",inputErrorClass:".popup__text_type_error"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._formInputs=Array.from(n.querySelectorAll(e.formInput)),this._submitButton=n.querySelector(e.submitButtonSelector),this._inputErrorClass=e.inputErrorClass,this._setEventListeners()}var e,r;return e=t,(r=[{key:"_checkInputValidity",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.checkValidity()?e.textContent="":e.textContent=t.validationMessage}},{key:"changeButtonState",value:function(t){t?this._submitButton.removeAttribute("disabled",t):this._submitButton.setAttribute("disabled",!t)}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._formElement.checkValidity()?t._submitButton.removeAttribute("disabled",t._formElement.checkValidity()):t._submitButton.setAttribute("disabled",!t._formElement.checkValidity())}))}))}},{key:"enableValidation",value:function(){var t=this;this._formInputs.forEach((function(e){t._checkInputValidity(e)})),this.changeButtonState(this._formElement.checkValidity())}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._popupForm=t.querySelector(".popup__form"),n._popupInputs=n._popupForm.querySelectorAll(".popup__text"),n._popupSubmit=n._popupForm.querySelector(".popup__submit"),n._handleFormSubmit=n._handleFormSubmit.bind(m(n)),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._popupInputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){p(b(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleFormSubmit)}},{key:"close",value:function(t){p(b(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_handleFormSubmit",value:function(t){t.preventDefault();var e=this._getInputValues();this._submitCallback(e),this.close()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var _=function(){function t(e){var n=e.nameSelector,r=e.jobSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job;this._nameElement.textContent=e,this._jobElement.textContent=n}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var g=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=e,this._handleCardClick=n,this._item=r}var e,n;return e=t,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(".elements-template").content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(t){this._element=this._getCardTemplate();var e=this._element.querySelector(".element__photo"),n=this._element.querySelector(".element__title");return this._likeButton=this._element.querySelector(".element__button"),this._deleteButton=this._element.querySelector(".element__trash"),this._zoomButton=this._element.querySelector(".element__zoom"),e.src=t.link,e.alt="На фото - "+t.name,n.textContent=t.name,this._setEventListeners(),this._element}},{key:"_handleLikeClick",value:function(){this._likeButton.classList.toggle("element__button_clicked")}},{key:"_handleDeleteClick",value:function(){this._deleteButton.closest(".element").remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){return t._handleDeleteClick()})),this._zoomButton.addEventListener("click",(function(){return t._handleCardClick(t._item)}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var P=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).popupImage=e._popup.querySelector(".popup__image"),e.popupCaption=e._popup.querySelector(".popup__title_type_image"),e}return e=u,(n=[{key:"open",value:function(t,e){j(x(u.prototype),"open",this).call(this,this.popup),this.popupImage.src=t,this.popupImage.alt="На фото - "+e,this.popupCaption.textContent=e}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a))(document.querySelector(".popup_type_image"));P.setEventListeners();var C=function(t){P.open(t.link,t.name)},B=function(t,e){return new g(t,e).createCard(t)},q=new u({items:[{name:"Казань",link:"https://images.unsplash.com/photo-1631775866694-fe340840cc52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},{name:"Москва",link:"https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1678&q=80"},{name:"Санкт-Петербург",link:"https://images.unsplash.com/photo-1579677359441-a59fa83ecc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"},{name:"Камчатка",link:"https://images.unsplash.com/photo-1557094005-176cbfe3554d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"},{name:"Восточная Сибирь",link:"https://images.unsplash.com/photo-1590414731158-459a3c3d98ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{name:"Эльбрус",link:"https://images.unsplash.com/photo-1582220123432-6b1a42a6e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1414&q=80"}],renderer:function(t){return document.querySelector(".elements").append(B(t,(function(){return C(t)})))}},".elements");q.renderItems();var D=document.querySelector(".profile__button_type_edit"),L=document.querySelector(".profile__button_type_add"),A=document.querySelector("#user-name"),I=document.querySelector("#user-job"),T=new _({nameSelector:".profile__title",jobSelector:".profile__subtitle"}),M=new v(document.querySelector(".popup_type_edit"),(function(t){var e=t.name,n=t.job;T.setUserInfo({name:e,job:n})}));D.addEventListener("click",(function(){var t=T.getUserInfo(),e=t.name,n=t.job;A.value=e,I.value=n,M.open()})),M.setEventListeners();var H=new v(document.querySelector(".popup_type_add"),(function(t){var e={name:t.title,link:t.link},n=B(e,(function(){return C(e)}));q.addItem(n)}));H.setEventListeners(),L.addEventListener("click",(function(){H.open(),R.submitFormAdd.changeButtonState(!1)}));var R={};Array.from(document.querySelectorAll(t.formElement)).forEach((function(e){var n=new r(t,e);R[e.getAttribute("name")]=n}))})();