angular
  .module('chaperon')
  .controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['$http', '$routeParams'];

function UsersShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/users/'+$routeParams.id
  }).then(function successCallback(json) {
    console.log(json);
    vm.user = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
