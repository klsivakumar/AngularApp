'use strict';

angular.module('angularAppApp')
    .directive('sidebarDirective', function() {
        return {
                link : function(scope, element, attr) {
                    scope.$watch(attr.sidebarDirective, function(newVal) {
                          if(newVal)
                          {
                            angular.element("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                            return;
                          }
                            angular.element("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                         });
                }
            };
    })
    .directive('treeviewmenuDirective', function() {
       return {
                link : function(scope, element, attr) {
                element.on('click',  function(e) {
                    var animationSpeed = 100;
                    if ((element.next().is('.treeview-menu')) && (element.next().is(':visible'))) {
                         //Close the menu
                         element.next().removeClass('menu-open');
                         element.next().slideUp(animationSpeed, function () {
                         //Fix the layout in case the sidebar stretches over the height of the window
                         //_this.layout.fix();
                          });
                          //element.next().parent("li").removeClass("active");
                     }
                     //If the menu is not visible
                     else if ((element.next().is('.treeview-menu')) && (!element.next().is(':visible'))) {
                         //Get the parent menu
                         var parent = element.next().parents('ul').first();
                         //Close all open menus within the parent
                         var ul = parent.find('ul:visible').slideUp(animationSpeed);
                         //Remove the menu-open class from the parent
                         ul.removeClass('menu-open');
                         //Get the parent li
                         var parent_li = element.next().parent("li");
                         //Open the target menu and add the menu-open class
                         element.next().slideDown(animationSpeed, function () {
                         //Add the class active to the parent li
                               element.next().addClass('menu-open');
                               parent.find('li.active').removeClass('active');
                               parent_li.addClass('active');
                               //Fix the layout in case the sidebar stretches over the height of the window
                              // _this.layout.fix();
                         });
                   }
                   //if this isn't a link, prevent the page from being redirected
                   if (element.next().is('.treeview-menu')) {
                    // e.preventDefault();
                   }

                });


            }
        };
    });

