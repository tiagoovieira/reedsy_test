angular.module('reedsy').controller('BooksIndexController', [ 
  '$scope', 'book',
  function($scope, book){

    getBooks();

    function getBooks(){
      var promise = book.getAll();
      promise.then(function( books ){
        console.log(books)
        $scope.books = books.data
      });
    }

  }
])