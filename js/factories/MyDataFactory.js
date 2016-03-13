app.factory('MyDataFactory', ['$http','$window','$q',function MyDataFactory ($http, $window, $q) {

  return {
    getDataFromServer: function() {
      var defered = $q.defer();
        var promise = defered.promise;

        $http.get('data/homecards.json')
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
  }

}]);
