'use strict';
var resource = {};

angular.extend(resource, require('./format'));
angular.extend(resource, require('./target'));
angular.extend(resource, require('./ticket'));
angular.extend(resource, require('./print'));

module.exports = resource;