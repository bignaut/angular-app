angular.module('applicationName').controller('SearchController',['SearchService','$scope', '$window', function (SearchService, $scope, $window) {
    
    $scope.resultSet = SearchService.getResultSet();
    
    this.logger = Object();
    this.logger.log = function(msg){
        console.log('SearchController.js: ' + msg);
    };    
    
    this.searchBy = function(v){
        SearchService.searchBy(v);
    };
    
}]);