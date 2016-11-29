angular.module('applicationName').controller('AnotherController', function($scope){
    $scope.dt = {}; //обязательно инициализировать, т.к. в следующей строке иначе вылетит ошибка, что не может найти такое свойство
    $scope.dt.breakfast = false;
});
/* можно создавать контроллеры и так, на лету, 
 * просто обращаясь к angular.module('имя модуля главного приложения')*/
