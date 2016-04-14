(function(){
  'use strict'

  angular
    .module('uiTest')
    .service('myService', function($http) {
   // var BASE_URL="http://10.0.1.226:3100";
    var BASE_URL="http://autogendev-env.us-west-2.elasticbeanstalk.com/rest/user";
      return {
        getCustomer: function(id) {
         var param=id;
          //since $http.get returns a promise,
          //and promise.then() also returns a promise
          //that resolves to whatever value is returned in it's
          //callback argument, we can return that.
          return $http.get(BASE_URL+ '/'+param)
            .then(function(result) {
            return result.data;
          });
        },

        addCustomer:function (customer) {
           return $http.post(BASE_URL,customer)
            .then(function(results) {
               return results.data;
          });
        },    

        deleteCustomer:function(id){
          var param = [];
          if(Array.isArray(id)) {
            param = id;
          } else {
            param.push(id);
          }
          return $http.delete(BASE_URL+"/"+param)
            .then (function(result){

            })
        },

       updateCustomer:function(customer){
          return $http.put(BASE_URL,customer).then(function (status) {
           return status.data;
         });
        }


      }

    });
})();
