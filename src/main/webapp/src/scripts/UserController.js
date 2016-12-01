/*
 * Короче, чтобы поместить значения в скоуп, а так же воспользоваться сервисом нам надо эти скоуп и сервис заинжектить,
 * причем в строгом порядке их появления, иначе если поменять их местами, то скоуп попадет в переменную сервиса, а сервис в переменную
 * скоупа и все повалится нафиг.
 */

angular.module('applicationName').controller('UserController',['$scope','UserService', function($scope,UserService){
    
    $scope.user = UserService.getUser();
    
}]);


