angular.module('reedsy').factory('book', ['$http',
  function($http) {

    var book = {

      getAll: function() {
        return $http({
          method: 'GET',
          url: '/books.json'
        }).success(function(data, status){
          console.log(data);
        }).error(function(data, status){

        });
      }
    }
    return book;
  }
]);