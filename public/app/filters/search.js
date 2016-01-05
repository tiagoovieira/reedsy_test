angular.module('reedsy').filter('search', function() {
  return function( items, input) {
    var filtered = [];
    angular.forEach(items, function(item) {
      if (input == undefined){
        filtered.push(item);
      }
      else if(item.name.toLowerCase().indexOf(input.toLowerCase()) > -1 || 
              item.author.name.toLowerCase().indexOf(input.toLowerCase()) > -1){
        filtered.push(item);
      }
    });
    return filtered;
  }
});