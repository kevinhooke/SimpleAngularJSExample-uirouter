var simpleApp = angular.module('SimpleUIRouterApp', 
    [ "ui.router", "ngAnimate", "SimpleControllers" ]);


simpleApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    // show page 1
    .state('page1', {
      url: '/page1',
      templateUrl: 'page1.html'
    })
    
    .state('page2', {
      url: '/page2',
      templateUrl: 'page2/page2.html'
    })

    .state('page2.nested1', {
      url: '/page2nested1',
      templateUrl: 'page2/page2_subsection1.html'
    })

    .state('page2.nested2', {
      url: '/page2nested2',
      templateUrl: 'page2/page2_subsection2.html'
    })

    .state('page2.nested3', {
      url: '/page2nested3',
      templateUrl: 'page2/page2_subsection3.html'
    })

    .state('page3', {
      url: '/page3',
      templateUrl: 'page3/page3.html'
    });
});
