export default function ($scope, $location, UserFactory) {
  $scope.un = "";
  $scope.password = "";

  $scope.submit = function () {
    const isLoginSuccess = UserFactory.login($scope.un, $scope.password);

    if (isLoginSuccess) {
      $location.path("/");
    }
  };
}
