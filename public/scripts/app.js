/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('chaperon', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/users',
      controllerAs: 'usersIndexCtrl',
      controller: 'UsersIndexController'
    })
    .when('/users', {
      templateUrl: '/templates/users',
      controllerAs: 'usersIndexCtrl',
      controller: 'UsersIndexController'
    })
    .when('/users/:id', {
      templateUrl: '/templates/users-show',
      controllerAs: 'usersShowCtrl',
      controller: 'UsersShowController'
    })
    .when('/signup', {
      templateUrl: '/templates/signup',
      controllerAs: 'usersShowCtrl',
      controller: 'UsersShowController'
    })
    .otherwise({
      templateUrl:'templates/404' // Render 404 view
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
