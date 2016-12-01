angular.module('applicationName').service('UserService', function(){
    
    /*global user variable*/
    var user = {
        firstName : 'UserName',
        lastName : 'UserLastName',
        roles : ['Role'],
        loggedIn : true
    };
    
    return {
        
        hasRole : function(r){
            for(i=0; i<this.user.roles.length; i++){
                if(this.user.roles[i].toUpperCase() === r.toUpperCase()){
                    return true;
                }
            }
            return false;
        },

        getUser : function(){
            return user;
        },

        logIn : function(){
            /*make function to login and getting credentials from rest*/
        }
        
    };
    
});
