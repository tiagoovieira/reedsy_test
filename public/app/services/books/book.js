angular.module('reedsy').factory('book', ['$http', '$q',
  function($http, $q) {

    var values = [];
    var book = {
      getAll: function() {
        var deferred = $q.defer();
        return $http({
          method: 'GET',
          url: '/books.json'
        }).success(function(data, status){
          values = data;
          deferred.resolve(data);
        }).error(function(data, status){

        });
        return deferred.promise;
      },
      get: function(id){
        return $http({
          method: 'GET',
          url: '/books/' + id + '.json'
        }).success(function(data,status){
        }).error(function(data,status){

        });
      },
      getValues: function(){
        return values;
      }
    }
    return book;
  }
]);