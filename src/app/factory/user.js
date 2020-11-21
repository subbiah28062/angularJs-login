import { users } from "../../backend/login";

export function UserFactory() {
  const state = {
    un: "",
    password: "",
    isLoggedIn: false,
    isAdmin: false,
  };

  return {
    login: (currentUn, currentPassword) => {
      const user = users.find(({ un = "" }) => un === currentUn);

      if (user) {
        if (user.password === currentPassword) {
          state.un = currentUn;
          state.password = currentPassword;
          state.isLoggedIn = true;
          state.isAdmin = user.role === "admin";
          return true;
        } else {
          console.log("password is not correct");
        }
      } else {
        console.log("user not found");
      }

      return false;
    },

    addUser: (currentUn, currentPassword) => {
      const user = users.find(({ un = "" }) => un === currentUn);

      if (user) {
        return false;
      } else {
        users.push({ un: currentUn, password: currentPassword, role: "user" });
      }
    },

    getIsLoggedIn: () => {
      return state.isLoggedIn;
    },

    getIsAdmin: () => {
      return state.isAdmin;
    },
  };
}
