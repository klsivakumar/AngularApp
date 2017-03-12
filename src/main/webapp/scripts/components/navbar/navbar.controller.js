    'use strict';

    angular.module('angularAppApp')
        .controller('NavbarController', function ($scope, $location,$anchorScroll, $state, Auth, Principal, ENV) {
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

                             }],
                    url: "dashboard"

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
                             }],
                    url: "dashboard"
                },
                {
                    menu : "Widgets",
                    icon : "fa fa-th",
                    url: "dashboard"
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
                             }],
                    url: "general-forms"
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
                             }],
                    url: "general-forms"
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
                             }],
                    url: "general-forms"
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
                              }],
                    url: "general-forms"
                  }





            )

            $scope.logout = function () {
                Auth.logout();
                $state.go('home');
            };
        });
