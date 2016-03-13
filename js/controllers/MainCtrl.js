app.controller('MainCtrl', ['$scope','MyDataFactory',function($scope, MyDataFactory){

  MyDataFactory
    .getDataFromServer()
    .then(function(data) {
      $scope.homecards= JSON.parse(data.data)
    })

  $scope.sort = "+pricePerMonth";

  $scope.setSort = function(type) {
    $scope.sort = type;
  };

}]);

