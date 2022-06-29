// authentication

class Auth {
  constructor() {
    this.authenticated = false;
  }
  login({ user, password, callback }) {
    if (user === "admin" && password === "admin") {
      this.authenticated = true;
      return true;
    }
    callback();
    return false;
  }
  logout() {
    this.authenticated = false;
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
