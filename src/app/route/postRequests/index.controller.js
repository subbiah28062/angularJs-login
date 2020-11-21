export default function ($scope, $location, UserFactory) {
  
    $scope.addPost = function () {
        const isPOSTSuccess = UserFactory.addsubject($scope.postname,$scope.postbody,$scope.postnumber);

        $location.path("/register");      
    };
  }
  