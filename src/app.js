'use strict';
/**
 * @ngInject
 */
var angular = require('angular');

require('angular-formly');
require('angular-formly-templates-bootstrap');
require('angular-loading-bar');
require('angular-resource');
require('angular-translate');
require('angular-translate-loader-partial');
require('angular-ui-router');
require('mi-angular-alert-service');
require('mi-angular-resource-builder');

var requires = [
  'formly',
  'formlyBootstrap',
  'angular-loading-bar',
  'ngResource',
  'pascalprecht.translate',
  'ui.router',
  'mi.AlertService',
  'mi.ResourceBuilder',
  require('./components').name,
  require('./shared').name
];

angular.module('tox-ticketprint-ui-app', requires)

  // redirect for unknown routes ///////////////////////////////////////////////////////////////////////////////////////
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state;
      $state = $injector.get('$state');
      $state.go('app');
    });
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })
  // ===================================================================================================================

  // translation stuff /////////////////////////////////////////////////////////////////////////////////////////////////
  .config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{part}/{lang}.json'
    });
    // add translation table
    $translateProvider
      .registerAvailableLanguageKeys(['en', 'de'], {
        'en_*': 'en',
        'de_*': 'de'
      })
      .determinePreferredLanguage();

    /*
     The fallback language is not working ...
     $translateProvider.fallbackLanguage('en');
     The following workaround sets the preferred language to english,
     if the detection failed or the detected language is not known.
     */
    var language = $translateProvider.preferredLanguage();
    if ((language !== null) || !language.match(/(de).*/)) {
      return $translateProvider.preferredLanguage('de');
    }
  })
  // ===================================================================================================================

  // angular-loading-bar ///////////////////////////////////////////////////////////////////////////////////////////////
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  // ===================================================================================================================

  // mi-angular-alert-service //////////////////////////////////////////////////////////////////////////////////////////
  .constant('ALERT_LEVELS', {
    danger: {timeout: 10000},
    warning: {timeout: 5000},
    success: {timeout: 3000},
    info: {timeout: 3000}
  })
  // ===================================================================================================================

;

angular.bootstrap(document, ['tox-ticketprint-ui-app']);
