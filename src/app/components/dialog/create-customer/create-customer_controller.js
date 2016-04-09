(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('createCustomerDialogController', createCustomerDialogController);


  /** @ngInject */
  function createCustomerDialogController($scope, $mdDialog,myService,$http,$state,appPopupFactory) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
     $scope.formData={};
     $scope.formData.created_at=new Date();
     $scope.formData.updated_at=new Date();
     $scope.confirm = function(){
     $http({
        method  : 'POST',
        url     : 'http://localhost:3000/api/customers',
        //url     : 'http://10.0.1.64:3100/api/goals',
        data    : $scope.formData,  // pass in data as strings
        headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
      })
        .success(function(data) {
          appPopupFactory.showSimpleToast('Customer Created Successfully.');
          $state.go($state.current, {}, {reload: true});
          console.log("OK");
          $scope.close();
        })
        .error(function(data, status, headers, config){
        console.log(data);
        console.log(status);
      });

    };
  }
})();
