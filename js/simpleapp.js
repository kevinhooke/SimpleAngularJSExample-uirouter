var simpleApp = angular.module('SimpleApp',
	[
	 	"ngRoute",
		"SimpleControllers"
	]);


simpleApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'page1.html',
          controller: 'Page1Controller'
        }).
        when('/page2', {
          templateUrl: 'page2.html',
          controller: 'Page2Controller'
        }).
        when('/page3', {
          templateUrl: 'page3.html',
          controller: 'Page3Controller'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
