angular.module('app.detail', ['ngNewRouter'])
  .controller('DetailController', ['$routeParams', DetailController]);

function DetailController ($routeParams) {
  this.id = $routeParams.id;
}

angular.module('app.detail', ['ngNewRouter'])
  .controller('TestController', ['$routeParams', TestController]);

function TestController ($routeParams) {
  this.id = $routeParams.id;
}