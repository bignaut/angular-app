angular.module('applicationName').controller('ItemController',['$scope','$window','SearchService', function($scope, $window, SearchService){
    
    this.rowClick = function(id){
        console.log('Clicked row with id = '+id);
        console.log('Scope id = ' + $scope.$id);
    };
    
    this.deleteItem = function(index){
        SearchService.deleteItemByIndex(index);
    };
    
}]);