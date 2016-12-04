    'use strict';

    angular.module('angularAppApp')
        .directive('controlsidebarDirective', function() {
           return {
                    link : function(scope, element, attr) {
                    element.on('click',  function(e) {
                       $.AdminLTE = {};
                        $.AdminLTE.options = {
                        //Control Sidebar Options
                          enableControlSidebar: true,
                          controlSidebarOptions: {
                            //Which button should trigger the open/close event
                            toggleBtnSelector: "[data-toggle='control-sidebar']",
                            //The sidebar selector
                            selector: ".control-sidebar",
                            //Enable slide over content
                            slide: true
                          }
                        };
                        var o = $.AdminLTE.options;
                        //Enable control sidebar
                          if (o.enableControlSidebar) {
                           var _this = this;
                             //Update options
                              var o = $.AdminLTE.options.controlSidebarOptions;
                              //Get the sidebar
                              var sidebar = $(o.selector);
                              //The toggle button
                              var btn = $(o.toggleBtnSelector);
                              //Listen to the click event
                              e.preventDefault();
                                //If the sidebar is not open
                                if (!sidebar.hasClass('control-sidebar-open')
                                        && !$('body').hasClass('control-sidebar-open')) {
                                  //Open the sidebar
                                  if (o.slide) {
                                        $('.control-sidebar').addClass('control-sidebar-open');
                                   } else {
                                            //Push the content by adding the open class to the body instead
                                            //of the sidebar itself
                                            $('body').addClass('control-sidebar-open');
                                          }
                                    } else {
                                      if (o.slide) {
                                              sidebar.removeClass('control-sidebar-open');
                                            } else {
                                              $('body').removeClass('control-sidebar-open');
                                            }

                                }
                          }
                          var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                                if (typeof controlSidebar !== "undefined") {
                          }

                    });
                }
           };
      });

