'use strict';

angular.module('angularAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('general-forms', {
                parent: 'entity',
                url: '/generalForms',
                data: {
                    authorities: []
                },

                views: {
                                    'content@': {
                                        templateUrl: 'scripts/app/entities/forms/general.html'

                                    }
                                },
                resolve: {

                }
            });
    });
