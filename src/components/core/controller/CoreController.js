'use strict';
/**
 * @ngInject
 */
module.exports = function (printjob, formats, targets, $translate) {
  var vm = this;
  vm.appversion = process.env.appversion;
  //vm.formData = {};
  //vm.printTicket = printTicket;

  // functions
  vm.reset = printTicket;
  // variables
  vm.originalModel = angular.copy(printjob);
  vm.model = printjob;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function printTicket() {
    console.log('tote bäume bewalzen mit: ', vm.formData);
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    return [
      {
        key: 'id',
        type: 'input',
        templateOptions: {
          label: $translate.instant('core.form.id.label'),
          placeholder: $translate.instant('core.form.id.placeholder'),
          required: true
        }
      },
      {
        key: 'target',
        type: 'select',
        templateOptions: {
          label: $translate.instant('core.form.target.label'),
          options: getOptionsTarget(),
          required: true
        }
      },
      {
        key: 'format',
        type: 'select',
        templateOptions: {
          label: $translate.instant('core.form.format.label'),
          options: getOptionsFormat(),
          required: true
        }
      }
    ];
  }

  function getOptionsTarget() {
    return [];
  }

  function getOptionsFormat() {
    return [];
  }
};
