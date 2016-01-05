angular.module('reedsy').controller('BooksIndexController', [ 
  '$scope', 'book', '$location',
  function($scope, book, $location){

    getBooks();
    $scope.currentPage = 1;
    $scope.genreCategories = {};
 
    function getBooks(){
      var promise = book.getAll();
      
      promise.then(function( books ){
        $scope.books = books.data
        
        

        var result = $scope.books.map(function(a) {return a.genre.category;});
        var res = arrayUnique(result);

        for(var i = 0; i < res.length; i++){
          $scope.genreCategories[i] = {'category': res[i] }
          
          var result2 = $scope.books.map(function(a) {
            if (a.genre.category === res[i]) {
              return a.genre.name;
            }
          });

          $scope.genreCategories[i]['genres'] 
          $scope.genreCategories[i]['genres'] = arrayUnique(result2);

          $scope.genreCategories = Object.keys($scope.genreCategories).map(function (key) {return $scope.genreCategories[key]});

          console.log($scope.genreCategories);

        }        
      });
    }

    var arrayUnique = function(a) {
      return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0 && c != undefined) p.push(c);
          return p;
      }, []);
    };

    $scope.showBook = function(){
      $location.path('/' + this.book.id);
    }

  }
])
