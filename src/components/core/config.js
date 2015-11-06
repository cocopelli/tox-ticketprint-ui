'use strict';
/**
 * @ngInject
 */
module.exports = {
  'app': {
    url: '',
    //abstract: true,
    //data: {
    //  requireAuth: true
    //},
    views: {
      'app': {
        templateUrl: '/views/core/app.html',
        controller: 'CoreController as coreVm'
      }
    },
    resolve: {
      FormatResource: 'FormatResource',
      formats: function (FormatResource) {
        return FormatResource.query().$promise;
      },
      TargetResource: 'TargetResource',
      targets: function (TargetResource) {
        return TargetResource.query().$promise;
      },
      PrintResource: 'PrintResource',
      printjob: function (PrintResource) {
        return new PrintResource();
      }
    }
  }
};
