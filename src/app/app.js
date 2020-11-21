import angular from "angular";
import "angular-route";
import "angular-material";
import "angular-messages";

import LoginCtrl from "./route/login/index.controller";
import HomeCtrl from "./route/home/index.controller";
import RegisterCtrl from "./route/register/index.controller";
import PostRequestCtrl from "./route/postRequests/index.controller";

import { UserFactory } from "./factory/user";

import "../style/app.css";

let app = () => {
  return {
    template: require("./app.html"),
    controller: "AppCtrl",
    controllerAs: "app",
  };
};

function AppCtrl($scope, $location, UserFactory) {
  $scope.$on("$routeChangeStart", function ($event, next, current) {
    const isLoggeedIn = UserFactory.getIsLoggedIn();

    if (!isLoggeedIn) {
      $location.path("/login");
    }
  });

  $scope.checkLogin = function () {
    const user = localStorage.getItem("user");
    if (user) {
      const userDecrypted = window.atob(user);
      const userParsed = JSON.parse(userDecrypted);

      UserFactory.login(userParsed.un, userParsed.password);
    }
  };
}

const MODULE_NAME = "app";

const mainModule = angular.module(MODULE_NAME, [
  "ngRoute",
  "ngMaterial",
  "ngMessages",
]);

mainModule.directive("app", app);

mainModule.factory("UserFactory", UserFactory);

mainModule
  .controller("AppCtrl", AppCtrl)
  .controller("HomeCtrl", HomeCtrl)
  .controller("LoginCtrl", LoginCtrl)
  .controller("PostRequestCtrl", PostRequestCtrl)
  .controller("RegisterCtrl", RegisterCtrl);

mainModule
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: require("./route/home/index.html"),
        controller: "HomeCtrl",
      })
      .when("/login", {
        template: require("./route/login/index.html"),
        controller: "LoginCtrl",
      })
      .when("/postRequests", {
        template: require("./route/postRequests/index.html"),
        controller: "PostRequestCtrl",
      })
      .when("/register", {
        template: require("./route/register/index.html"),
        controller: "RegisterCtrl",
      })
      .when("/post/:id", {
        template: require("./route/register/index.html"),
        controller: "RegisterCtrl",
      });
  })
  .config([
    "$mdGestureProvider",
    "$mdThemingProvider",
    function ($mdGestureProvider, $mdThemingProvider) {
      $mdGestureProvider.skipClickHijack();
      $mdThemingProvider
        .theme("default")
        .primaryPalette("purple")
        .accentPalette("green");
    },
  ])
  .config(function ($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider
      .theme("docs-dark", "default")
      .primaryPalette("yellow")
      .dark();
  });

window.app = mainModule;

export default MODULE_NAME;
