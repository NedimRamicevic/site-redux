// authentication
class Auth {
  constructor() {
    this.authenticated = false;
  }
  login({ user, password, cb }) {
    if (user === "admin" && password === "admin") {
      this.authenticated = true;
      cb();
    }
  }
  logout() {
    this.authenticated = false;
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
