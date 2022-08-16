// import store from "../store";
class TokenService {
  // getLocalRefreshToken() {
  //   let localStore = localStorage.getItem("auth");
  //   let user;
  //   try {
  //     user = JSON.parse(localStore);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return user?.user.access_token;
  // }

  // getLocalAccessToken() {
  //   let localStore = localStorage.getItem("persist:root");
  //   // console.log("admin-login", getAdminLogin);
  //   let auth;
  //   try {
  //     auth = JSON.parse(JSON.parse(localStore).auth);
  //     console.log("from tokenService", auth);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return auth?.user?.user?.access_token;
  // }

  // updateLocalAccessToken(token) {
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   user.accessToken = token;
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  getUser() {
    return JSON.parse(localStorage.getItem("persist:root"));
  }

  setUser(user) {
    localStorage.setItem("accessToken", user);
  }

  removeUser() {
    // localStorage.removeItem("user");
    localStorage.clear();
  }
}

export default new TokenService();
