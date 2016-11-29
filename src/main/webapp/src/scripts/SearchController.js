angular.module('applicationName').controller('SearchController', function (SearchService, $scope) {
    $scope.resultSet = [];
    this.logger = Object();
    this.logger.log = function(msg){
        console.log('SearchController.js: '+msg);
    };
    
    
    
    this.searchBy = function(v){
        $scope.resultSet = SearchService.searchBy(v);
    };
    
    this.rowClick = function(id){
        this.logger.log('Clicked row with id = '+id);
    };
    
    this.showDetails = function(id){
        
    };
});