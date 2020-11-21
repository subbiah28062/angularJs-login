export default function ($scope, $location, UserFactory) {
  $scope.isAdmin = true;
  $scope.posts = UserFactory.getUserPosts();

  $scope.checkIsAdmin = function () {
    $scope.isAdmin = UserFactory.getIsAdmin();
  };

  $scope.register = function () {
    $location.path("/register");
  };

  $scope.create = function () {
    $location.path("/postRequests");
  };

  $scope.routeToPost = function (id) {
    $location.path(`/post/${id}`);
  };
}
