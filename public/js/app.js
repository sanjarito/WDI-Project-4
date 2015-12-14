// must inject services into topoutApp

angular.module('topoutApp', ['app.routes', 'mainCtrl', 'userCtrl', 'userFactory', 'authFactory', 'authInterceptor'])

// application configuration to integrate token into requests
.config(function($httpProvider){
  // on every http request, the authInterceptor from authService.js method will be run
  $httpProvider.interceptors.push('authInterceptor')
})
