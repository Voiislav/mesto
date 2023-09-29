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


  // getting initial cards from server
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


  // changing user data
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

  // adding new cards
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

  
  // like
  putLike(cardId) {
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


  // dislike
  deleteLike(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'DELETE',
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


  // avatar changing
  changeAvatar(avatarLink) {
    return fetch(`${this._usersUrl}/avatar`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'db2e41a4-3852-40e2-9c01-18833418656f'
        },
        body: JSON.stringify({
          avatar: avatarLink
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }


  // removing cards
  removeCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: 'db2e41a4-3852-40e2-9c01-18833418656f',
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