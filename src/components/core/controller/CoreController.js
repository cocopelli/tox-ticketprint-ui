'use strict';
/**
 * @ngInject
 */
module.exports = function () {
  var vm = this;
  vm.appversion = process.env.appversion;
  vm.formData = {};
  vm.printTicket = printTicket;

  //////////

  function printTicket() {
    console.log('tote bäume bewalzen mit: ', vm.formData);
  }
};
