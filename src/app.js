'use strict';
/**
 * @ngInject
 */
var angular = require('angular');

process.env.appversion = require('../package.json').version;

var requires = [
  require('./components').name
];

angular.module('tox-ticketprint-ui-app', requires);

angular.bootstrap(document, ['tox-ticketprint-ui-app']);
