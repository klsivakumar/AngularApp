'use strict';

angular.module('angularAppApp')
    .controller('LoginController', function ($rootScope, $scope, $state, $timeout, Auth) {

        $scope.user = {};
        $scope.errors = {};

        $scope.rememberMe = true;
        $timeout(function (){angular.element('[ng-model="username"]').focus();});
        $scope.login = function (event) {
            console.log('inside login event');
            event.preventDefault();
            Auth.login({
                username: $scope.username,
                password: $scope.password,
                rememberMe: $scope.rememberMe
            }).then(function () {
                $scope.authenticationError = false;
                $rootScope.isAuthenticated=true;
                console.log('state is ',$rootScope.previousStateName);
                if ($rootScope.previousStateName === 'register') {
                    $state.go('home');
                } else {
                    $rootScope.back();
                }
            }).catch(function () {
                $scope.authenticationError = true;
            });
        };
    });
