 'use strict';

angular.module('angularAppApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-angularAppApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-angularAppApp-params')});
                }
                return response;
            }
        };
    });
