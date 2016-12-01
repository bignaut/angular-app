angular.module('applicationName').service('SearchService',['$http', function($http){
    
    var rs = []; //создаем ссылку на результирующий массив, которая будет доступна для других областей видимости
    return {
        searchBy : function(v) {
            rs.length = 0;
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
            return rs;
        },
    
        getResultSet : function() {
            return rs;
        },
        
        deleteItemByIndex : function(index) {
            var id = rs[index].id;
            req = {
                method: 'DELETE',
                url: 'restapi/item',
                params: {
                    id: id
                }
            };
            $http(req).then(
                    function successCallback(response) {
                        rs.splice(index,1);
                        console.log('deleted with id = '+id);
                    },
                    function errorCallback(resonse) {
                        console.log('failed to delete');
                    }
            );
        }
    };
}]);
