(function() {
  'use strict';

  angular
    .module('uiTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,appPopupFactory,$state) {
    var vm = this;

     vm.login=function(){
      var username = vm.email;
      var password = vm.password;
      if ( username == "ankush" && password == "welcome"){
        appPopupFactory.showSimpleToast('Welcome to homepage');
          $state.go('home');// Redirecting to other page.
        return false;
      }
      else{
         appPopupFactory.showSimpleToast('Please enter correct username and password');
      }
    };

  }

})();
