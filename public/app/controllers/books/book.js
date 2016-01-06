angular.module('reedsy').controller('BookShowController', [ 
  '$scope', 'book', '$stateParams', '$location',
  function($scope, book, $stateParams,$location){
    
    var currentBook = $stateParams.id;
    
    getBook();

    // Redirects to selected book
    $scope.showBook = function(){
      $location.path('/' + this.book.id);
    }

    function getBook(){
      var promise = book.get(currentBook);
      promise.then(function(data){
        $scope.book = data.data[0];
        getBooks();
      })
    }

    // Checks if all books where already fetched by book service, if not, requests the server 
    // for that data and uses it to get similiar books based on category and genre
    function getBooks(){
      if (book.getValues().length < 1){
        var promise = book.getAll();
        promise.then(function( books ){
          $scope.recommendedBooks = getRecommendations(books.data);
        });
      }
      else {
        $scope.recommendedBooks = getRecommendations(book.getValues());
      }
    }

    function getRecommendations(books){
      var categories = books.map(function(a) {
                          if (a.genre.category == $scope.book.genre.category){
                            return a;
                          }
                        });
      categories = categories.filter(Boolean);
      var genres = categories.map(function(a) {if ($scope.book.genre.name == a.genre.name) {return a;}});
      genres = genres.filter(Boolean);
      return genres.slice(0,3);  

    }
  }
])