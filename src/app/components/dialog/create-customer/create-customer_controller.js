(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('createCustomerDialogController', createCustomerDialogController);


  /** @ngInject */
  function createCustomerDialogController($scope, $mdDialog,myService,$http,$state,appPopupFactory,$cookieStore) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
     $scope.formData={};
     $scope.confirm = function(){
       var formData=$scope.formData;
       myService.addCustomer(formData)
         .then(function(data) {
           $scope.data=data;
           appPopupFactory.showSimpleToast('Customer Updated Successfully.');
           $state.go($state.current, {obj:data},{reload: true});
           $scope.close();

           $cookieStore.put('myFavorite',data);

         });

    };
  }
})();
