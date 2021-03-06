'use strict';

angular.module('angularAppApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
            console.log("Authentication successfull");
        });
    });
