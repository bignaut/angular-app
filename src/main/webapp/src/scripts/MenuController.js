angular.module('applicationName').controller('MenuController', function($scope, SearchService){
    
    $scope.menu = {};
    $scope.menu.isShowing = true;
    $scope.menu.getContentSize = function(){
        if($scope.menu.isShowing === false){
            return "100%";
        }else{
            return "79%;"; //if not .main-menu class position: fixed;
//            return "100%";
        }
    };
    this.switchMenu = function(){
        $scope.menu.isShowing = !($scope.menu.isShowing);
    };
    this.hideMenu = function(){
        $scope.menu.isShowing = false;
    };
    
    
    $scope.filter = {};
    $scope.filter.isShowing = false;
    this.switchFilter = function() {
        $scope.filter.isShowing = !$scope.filter.isShowing;
        $scope.menu.isShowing = false;
    };
    this.hideFilter = function() {
        $scope.filter.isShowing = false;
    };
});

