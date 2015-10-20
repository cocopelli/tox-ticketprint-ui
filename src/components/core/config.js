'use strict';

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
    }
  }
};
