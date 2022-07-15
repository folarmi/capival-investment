class TokenService {
  // auth: "{\"isLoggedIn\":true,\"user\":{\"user\":{\"access_token\
  getLocalRefreshToken() {
    let localStore = localStorage.getItem("auth");
    let user;
    try {
      user = JSON.parse(localStore);
    } catch (error) {
      console.log(error);
    }
    return user?.user.access_token;
  }

  getLocalAccessToken() {
    let localStore = localStorage.getItem("persist:root");
    let getAdminToken = localStorage.getItem("aadminToken");
    // console.log("admin-login", getAdminLogin);
    let auth;
    try {
      auth = JSON.parse(JSON.parse(localStore).auth);
    } catch (error) {
      console.log(error);
    }

    return auth?.user?.user?.access_token ?? getAdminToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("persist:root"));
  }

  setUser(user) {
    const userObj = {
      accessToken: user?.accessToken,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      isEmailVerified: user?.isEmailVerified,
      menu: user?.menu,
      phone: user?.phone,
      lastLogin: user?.lastLogin,
      referralCode: user?.referralCode,
      tokenExpiry: user?.tokenExpiry,
      userId: user?.userId,
      clientId: Number(user?.clientId),
      partnerCategory: user?.partnerCategory,
    };
    console.log("This is the user object", userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  }

  removeUser() {
    // localStorage.removeItem("user");
    localStorage.clear();
  }
}

export default new TokenService();
