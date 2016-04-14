(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('homeController', homeController);

  /** @ngInject */
  function homeController($scope,appPopupFactory,myService,dialogFactory,$stateParams,$cookieStore) {
    var vm = this;


   
   vm.param=$stateParams.obj;

   vm.addCustomer=function(){
    myService.addCustomer(formData)
         .then(function() {
           appPopupFactory.showSimpleToast('Customer added Successfully.');
         });

   };

   var favoriteCookie = $cookieStore.get('myFavorite');
    vm.getCustomer=function(){
      var param=vm.param;
      var favoriteCookie = $cookieStore.get('myFavorite');

      myService.getCustomer(favoriteCookie).then(function(data) {
             $scope.customers=data;
             console.log($scope.customers);

      });
    };
    vm.getCustomer();
        

    vm.createCustomer = function(ev) {

      dialogFactory.showCreateCustomerDialog({
        targetEvent: ev
      });
    };

    vm.updateCustomer = function(ev) {
      dialogFactory.showUpdateCustomerDialog({
        targetEvent: ev,
        locals: {
          customer:$scope.customers
        }
      });
    };


     vm.deleteCustomerFn = function() {
      var customer=$scope.customers;
      var id=customer[0].uid;
      myService.deleteCustomer( id )
        .then(function() {
          $scope.customers.splice($scope.currIndex, 1);
          delete $scope.targetGoal;
          appPopupFactory.showSimpleToast('Customer Deleted Successfully.');
        });
    };
    vm.deleteCustomer = function(ev,id) {
      $scope.id = id;
      dialogFactory.showDeleteDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: vm.deleteCustomerFn,
          title: 'Delete Customer?',
          content: 'Are you sure you want to delete?'
        }
      });
    };

  };

})();
