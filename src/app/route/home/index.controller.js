export default function ($scope, $location, UserFactory) {
  $scope.isAdmin = true;

  $scope.checkIsAdmin = function () {
    $scope.isAdmin = UserFactory.getIsAdmin();
  };

  $scope.register = function () {
    $location.path("/register");
  };
}
