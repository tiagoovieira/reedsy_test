angular.module('reedsy').controller('BooksIndexController', [ 
  '$scope', 'book', '$location', '$filter',
  function($scope, book, $location, $filter){

    getBooks();
    $scope.currentPage = 1;
    $scope.perPage = 24;
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
    
    $scope.setPerPage = function(perPage){
      $scope.perPage = perPage
    }

    // Materialize select is unstable, alternatively using checkboxes
    $scope.selection = []

    $scope.toggleSelection = function toggleSelection(genre) {
      $scope.books = book.getValues();
      var idx = $scope.selection.indexOf(genre);
      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }
      // is newly selected
      else {
        $scope.selection.push(genre);
      }
      $scope.books = $filter('genreCategory')($scope.books, $scope.selection);
    };  

  }
])
