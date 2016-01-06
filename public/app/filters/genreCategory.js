angular.module('reedsy').filter('genreCategory', function() {
  return function( items, input) {
    var filtered = [];

    angular.forEach(items, function(item) {
      // console.log(input);
      filtered.push(item);
    });
    return filtered;
  }
});