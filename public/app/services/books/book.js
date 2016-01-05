angular.module('reedsy').factory('book', ['$http',
  function($http) {

    var book = {

      getAll: function() {
        return $http({
          method: 'GET',
          url: '/books.json'
        }).success(function(data, status){

        }).error(function(data, status){

        });
      },
      get: function(id){
        return $http({
          method: 'GET',
          url: '/books/' + id + '.json'
        }).success(function(data,status){

        }).error(function(data,status){

        });
      }
    }
    return book;
  }
]);