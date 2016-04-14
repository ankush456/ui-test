(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('updateCustomerDialogController', updateCustomerDialogController);


  /** @ngInject */
  function updateCustomerDialogController($scope, $mdDialog,customer,myService,appPopupFactory,$cookieStore) {

    $scope.close = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.customer=customer;
    console.log($scope.customer);
    var favoriteCookie = $cookieStore.get('myFavorite');
    $scope.confirm = function(){
      var customer=$scope.customer;
      var firstCustomer=customer[0];
        myService.updateCustomer(firstCustomer)
        .then(function() {
        appPopupFactory.showSimpleToast('Customer Updated Successfully.');
          $scope.close();

      });

    };

  }
})();
