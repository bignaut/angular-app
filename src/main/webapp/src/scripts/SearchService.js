angular.module('applicationName').service('SearchService', function($http){
    this.resultSet = [];
    
    var rs = this.resultSet; //создаем ссылку на результирующий массив, которая будет доступна для других областей видимости
    
    this.searchBy = function(v) {
        this.resultSet.length = 0;
        req = {
            method: 'GET',
            url: 'restapi/search',
            params: {
                value: v
            }
        };
        $http(req).then(
                function successCallback(response) {
                    data = response.data;
                    for(i=0; i<data.length; i++){
                        rs.push(data[i]);
                    };
                    console.log('success');
                },
                function errorCallback(resonse) {
                    console.log('failure');
                }
        );
        return this.resultSet;
    };
});
