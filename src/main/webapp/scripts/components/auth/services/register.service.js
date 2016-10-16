'use strict';

angular.module('angularAppApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


