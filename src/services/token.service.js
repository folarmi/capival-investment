// import store from "../store";
class TokenService {
  // getLocalRefreshToken() {
  //   let user;
  //   try {
  //     user = JSON.parse(localStore);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return user?.user.access_token;
  // }

  // getLocalAccessToken() {
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
  //   user.accessToken = token;
  // }

  // getUser() {
  //   return JSON.parse(localStorage.getItem("persist:root"));
  // }

  setUser(user) {
    window.sessionStorage.setItem("accessToken", user);
  }

  removeUser() {
    sessionStorage.clear();
  }
}

export default new TokenService();
