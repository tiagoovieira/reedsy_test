angular.module('reedsy').controller('BookShowController', [ 
  '$scope', 'book', '$stateParams',
  function($scope, book, $stateParams){
    
    var currentBook = $stateParams.id;
    
    getBook();

    function getBook(){
      var promise = book.get(currentBook);
      promise.then(function(book){
        $scope.book = book.data[0];
        console.log($scope.book)
      })
    }
  }
])