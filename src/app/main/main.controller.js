(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(myService,$scope,dialogFactory,appPopupFactory) {
    var vm = this;


    this.getCustomer=function(){
    	myService.getCustomers().then(function(data) {
             vm.customers=data;
    	});
    }

    this.getCustomer();


    vm.deleteCustomerFn = function() {
      myService.deleteCustomer( $scope.targetCustomer )
        .then(function() {
          vm.customers.splice($scope.currIndex, 1);
          delete $scope.targetGoal;
          appPopupFactory.showSimpleToast('Customer Deleted Successfully.');
        });
    };
    vm.deleteCustomer = function(ev, index, customer) {
      $scope.targetCustomer = customer;
      $scope.currIndex = index;
      dialogFactory.showDeleteDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: vm.deleteCustomerFn,
          title: 'Delete Customer?',
          content: 'Are you sure you want to delete?'
        }
      });
    };


     vm.updateCustomerFn = function() {
      myService.updateCustomer( $scope.targetCustomer )
        .then(function() {
          vm.customers.splice($scope.currIndex, 1);
          delete $scope.targetGoal;
          appPopupFactory.showSimpleToast('Customer Deleted Successfully.');
        });
    };
    vm.updateCustomer = function(ev, index, customer) {
      $scope.targetCustomer = customer;
      $scope.currIndex = index;
      dialogFactory.showUpdateCustomerDialog({
        targetEvent: ev,
        locals: {
          deleteConfirm: vm.updateCustomerFn,
          customer:customer
        }
      });
    };


      vm.createCustomerFn = function() {
      myService.createCustomer(data)
        .then(function() {
          appPopupFactory.showSimpleToast('Customer created Successfully.');
        });
    };
    vm.createCustomer = function(ev) {
      dialogFactory.showCreateCustomerDialog({
        targetEvent: ev,
        locals: {
          createConfirm: vm.createCustomerFn,
        }
      });
    };
  

  }

})();
