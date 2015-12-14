// injecting ngRoute
angular.module('app.routes', ['ngRoute'])

.config(function($routeProvier, $locationProvider){

  // running methods on $routeProvider
  $routeProvider
  // route for the home page, which is where you log in
    .when('/', {
      templateUrl: 'public/partials/login.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    // route for the user profile view
    .when('/home', {
      templateUrl: 'public/partials/user-home.html',
      controller: 'userController',
      controllerAs: 'userCtrl'
    })
    .when('/profile', {
      templateUrl: 'public/partials/user-profile.html',
      controller: 'userController',
      controllerAs: 'userCtrl'
    })
})
