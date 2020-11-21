import { users } from "../../../backend/login";

export default function ($scope, $location, UserFactory) {
  $scope.viewCreds=true;
  $scope.get= users;
  $scope.cu= UserFactory.getUser();
  $scope.currentUser = UserFactory.addsubject();
  $scope.newSubmit = function(){
    const isRegistrationSuccess = UserFactory.addsubject($scope.un,$scope.password,$scope.role);
    if(isRegistrationSuccess){
      alert('Registration successful');
      $location.path('/login');
    }else{
      $location.path('/register');
    }
  } 
  $scope.view  = function(){
    $scope.viewCreds=false;
   
    }
}
