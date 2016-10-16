'use strict';

angular.module('angularAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                parent: 'site',
                url: '/dashboard',
                data: {
                    authorities: []
                },

                views: {
                                    'content@': {
                                        templateUrl: 'scripts/app/dashboard/dashboard.html'

                                    }
                                },
                resolve: {

                }
            });
    });
