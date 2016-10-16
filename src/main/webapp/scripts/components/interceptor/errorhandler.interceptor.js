'use strict';

angular.module('angularAppApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('angularAppApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });