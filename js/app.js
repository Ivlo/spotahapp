 var app = angular.module("myApp",['ngRoute']);

 app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo:'/'});
  }]);
