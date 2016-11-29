(function(){
    var module = angular.module('testModule',[]);
        
    module.directive('testDiv', function(){
        return {
            restrict: 'E',
            templateUrl: "src/templates/testDiv.html",
            controllerAs: "tst",
            controller: function($scope){
                var msg = "test message";
                this.counter = 1;
                this.message = msg + ' ' + this.counter;
                $scope.data = {};
                this.changeMessageCount = function(){
                    this.counter++;
                    this.message = msg + ' ' + this.counter;
                };
                
                this.testHttpGet = function(url){
                    $http({
                        method: 'GET',
                        url: url
                    }).then(function successCallback(response){
                        $scope.data = response;
                    });
                };
            }
        };
    });
    
})();
/* создание модуля через вызов фунции, в ее теле сначала создаем модуль, присваивая его переменной
 * затем в этом модуле создаем директиву (в данном случае она же является и контроллером)
 * контроллер может использоваться только внутри директивы (в данном случае дом-элемента).
 * Из соседних элементов разметки этого контроллера видно не будет. */