    'use strict';

    angular.module('angularAppApp')
        .controller('NavbarController', function ($scope, $location, $state, Auth, Principal, ENV) {
            $scope.isAuthenticated = Principal.isAuthenticated;
            console.log("authenticated ", Principal.isAuthenticated);
            $scope.$state = $state;
            $scope.inProduction = ENV === 'prod';
            $scope.state=false;
            $scope.toggleState = function() {
                console.log('inside toggle state');
                $scope.state = !$scope.state;
            };
            $scope.toggleTreeMenu = function() {
                        console.log('inside toggle menu');
                        $scope.state = !$scope.state;
             };
            $scope.sections=[];
            $scope.sections.push(
                {
                    menu : "Dashboard",
                    icon : "fa fa-dashboard",
                    subMenu :[{
                                name    : "Dashboard v1",
                                icon    : "fa fa-circle-o"

                             }]

                },
                {
                    menu : "Layout Options",
                    icon : "fa fa-files-o",
                    subMenu :[{
                                name    : "Top Navigation",
                                icon    : "fa fa-circle-o"

                               },{
                                name    : "Boxed",
                                icon    : "fa fa-circle-o"
                               },
                               {
                                name    : "Boxed",
                                icon    : "fa fa-circle-o"
                             }]
                },
                {
                    menu : "Widgets",
                    icon : "fa fa-th",
                },
                {
                    menu : "Charts",
                    icon : "fa fa-pie-chart",
                    subMenu :[{
                                name    : "Morris",
                                icon    : "fa fa-circle-o"

                            },{
                                name    : "Float",
                                icon    : "fa fa-circle-o"
                               },
                               {
                                name    : "Inline Charts",
                                icon    : "fa fa-circle-o"
                             }]
                },
                {
                    menu : "UI Elements",
                    icon : "fa fa-th",
                    subMenu :[{
                                name    : "General",
                                icon    : "fa fa-circle-o"

                            },{
                                name    : "Icons",
                                icon    : "fa fa-circle-o"
                               },
                               {
                                name    : "Buttons",
                                icon    : "fa fa-circle-o"
                             },{
                                name    : "Sliders",
                                icon    : "fa fa-circle-o"
                             }]
                },
                {
                    menu : "Forms",
                    icon : "fa fa-edit",
                    subMenu :[{
                                name    : "General Elements",
                                icon    : "fa fa-circle-o"

                            },{
                                name    : "Advanced Elements",
                                icon    : "fa fa-circle-o"
                               },
                               {
                                name    : "Editors",
                                icon    : "fa fa-circle-o"
                             }]
                },
                {
                    menu : "Tables",
                    icon : "fa fa-table",
                    subMenu :[{
                              name    : "Simple Tables",
                              icon    : "fa fa-circle-o"

                              },{
                              name    : "Data Tables",
                              icon    : "fa fa-circle-o"
                              }]
                  }





            )

            $scope.logout = function () {
                Auth.logout();
                $state.go('home');
            };
        });
