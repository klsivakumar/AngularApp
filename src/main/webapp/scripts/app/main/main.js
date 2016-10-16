'use strict';

angular.module('angularAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },

                views: {
                                    'content@': {
                                        templateUrl: 'scripts/app/account/login/login.html',
                                        controller: 'LoginController'
                                    }
                                },
                resolve: {

                }
            });
    });
