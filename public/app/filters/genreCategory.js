angular.module('reedsy').filter('genreCategory', function() {
  return function( items, input) {
    var filtered = [];
    angular.forEach(items, function(item) {
      if(input && $.inArray(item.genre.name, input) > -1){
        filtered.push(item);
      }
      else if (input == undefined || input.length < 1 ) {
        filtered.push(item);
      }
    });
    return filtered;
  }
});