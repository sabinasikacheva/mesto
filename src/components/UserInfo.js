export default class UserInfo {
  constructor({userName, userInfo, userUrl}) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
    this._userUrl= document.querySelector(userUrl);
  }
  
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      avatar: this._userUrl.src
    };
  }
  
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._userUrl.src = data.avatar;
  }
}