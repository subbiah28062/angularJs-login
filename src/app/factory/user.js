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

      //Login Fuction tells us whether logged in or not.
      if (user) {
        if (user.password === currentPassword) {
          state.un = currentUn;
          state.password = currentPassword;
          state.isLoggedIn = true;
          state.isAdmin = user.role === "admin";

          localStorage.setItem(
            "user",
            window.btoa(
              JSON.stringify({ un: currentUn, password: currentPassword })
            )
          );
          return true;
        } else {
          console.log("password is not correct");
        }
      } else {
        console.log("user not found");
      }

      return false;
    },

    addUser: (currentUn, currentPassword, currentrole) => {
      const user = users.find(({ un = "" }) => un === currentUn);

      if (user) {
        alert(currentUn + " name Already exists");
        return false;
      } else {
        if (currentrole == null) {
          currentrole = "user";
        }
        users.push({
          un: currentUn,
          password: currentPassword,
          role: currentrole,
        });
      }
      return true;
    },

    addsubject: () => {
      const user = users.find(({ un = "" }) => un === state.un);
      user.posts.push();
    },

    getIsLoggedIn: () => {
      return state.isLoggedIn;
    },

    getUser: () => {
      return state.un;
    },

    getIsAdmin: () => {
      return state.isAdmin;
    },

    getUserPosts: () => {
      const user = users.find(({ un = "" }) => un === state.un);

      return user.posts;
    },
  };
}
