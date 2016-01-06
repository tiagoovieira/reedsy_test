angular.module('reedsy').controller('BooksIndexController', [ 
  '$scope', 'book', '$location',
  function($scope, book, $location){

    getBooks();
    $scope.currentPage = 1;
    $scope.genreCategories = {};
 
    // Calls book service API GET request, after it gets a reply, populates $scope.books
    function getBooks(){
      var promise = book.getAll();
      promise.then(function( books ){
        $scope.books = books.data;
        parseGenreCategories(books.data);  
      });
    }

    // Parses Genres & Categories from books.json to create a select dropdown with all the options
    function parseGenreCategories(books){
      var categories = arrayUnique(books.map(function(a) {return a.genre.category;}));
      for(var i = 0; i < categories.length; i++){
        $scope.genreCategories[i] = {'category': categories[i] }
        var genres = books.map(function(a) {if (a.genre.category === categories[i]) {return a.genre.name;}});
        $scope.genreCategories[i]['genres'] = arrayUnique(genres);
        $scope.genreCategories = Object.keys($scope.genreCategories).map(function (key) {return $scope.genreCategories[key]});
      }
    }

    // Returns an array of unique elements
    function arrayUnique(a) {
      return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0 && c != undefined) p.push(c);
          return p;
      }, []);
    };

    // Redirects to selected book
    $scope.showBook = function(){
      $location.path('/' + this.book.id);
    }

  }
])
