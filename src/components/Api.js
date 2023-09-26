export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._usersUrl = `${this._url}/users/me`;
    this._cardsUrl = `${this._url}/cards`;
    this._likesUrl = `${this._url}/cards/likes`;
    this._headers = headers;
  }

  // getting user data from server
  getUserData() {
    return fetch(this._usersUrl, {
      headers: {
        authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }) 
  }

  getInitialCards() {
    return fetch(this._cardsUrl, {
      headers: {
        authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  setNewUserData({
    name,
    about
  }) {
    return fetch(this._usersUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  addNewCard({
    name,
    link
  }) {
    return fetch(this._cardsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
        },
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  putLikes(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

// GET https://mesto.nomoreparties.co/v1/cohortId/cards
// GET https://nomoreparties.co/v1/cohortId/users/me

// db2e41a4-3852-40e2-9c01-18833418656f