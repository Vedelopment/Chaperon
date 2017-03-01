angular
  .module('chaperon', [
    'ui.router',
    'satellizer'
  ])
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('Account', Account)
  .config(configRoutes)
  ;


////////////
// ROUTES //
////////////

configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    require: false
  });

  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController',
      controllerAs: 'sc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('logout', {
      url: '/logout',
      template: null,
      controller: 'LogoutController',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
      resolve: {
        loginRequired: loginRequired
      }
    })


    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }

}

/////////////////
// CONTROLLERS //
/////////////////

MainController.$inject = ["Account"]; // minification protection
function MainController (Account) {
  var vm = this;

  vm.currentUser = function() {
   return Account.currentUser();
  }

}

HomeController.$inject = ["$http"]; // minification protection
function HomeController ($http) {
  var vm = this;
  vm.users = [];
  vm.new_user = {}; // form data

  $http.get('/api/contacts')
    .then(function (response) {
      vm.posts = response.data;
    });

  vm.signup = function() {
    $http.post('/api/contacts', vm.new_user)
      .then(function (response) {
        vm.new_user = {};
        vm.users.push(response.data);
      });
  };
  // vm.signup = function() {
  //   Account
  //     .signup(vm.new_user)
  //     .then(
  //       function (response) {
  //         vm.new_user = {}; // clear sign up form
  //         vm.contacts.push(response.data);
  //       }
  //     );
  // };
}

LoginController.$inject = ["$location", "Account"]; // minification protection
function LoginController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.login = function() {
    Account
      .login(vm.new_user)
      .then(function(){
        vm.new_user = {}; // clear sign up form
        $location.path('/profile'); // redirect to '/profile'
      })
  };
}

SignupController.$inject = ["$location", "Account"]; // minification protection
function SignupController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.signup = function() {
    Account
      .signup(vm.new_user)
      .then(
        function (response) {
          vm.new_user = {}; // clear sign up form
          $location.path('/profile'); // redirect to '/profile'
        }
      );
  };
}

LogoutController.$inject = ["$location", "Account"]; // minification protection
function LogoutController ($location, Account) {
  Account
    .logout()
    .then(function () {
        $location.path('/login');
    });
}


ProfileController.$inject = ["$location", "Account"]; // minification protection
function ProfileController ($location, Account) {
  var vm = this;
  vm.new_profile = {}; // form data

  vm.updateProfile = function() {
    Account
      .updateProfile(vm.new_profile)
      .then(function () {
        vm.showEditForm = false;
      });
  };
}

//////////////
// Services //
//////////////

Account.$inject = ["$http", "$q", "$auth"]; // minification protection
function Account($http, $q, $auth) {
  var self = this;
  self.user = null;

  self.signup = signup;
  self.login = login;
  self.logout = logout;
  self.currentUser = currentUser;
  self.getProfile = getProfile;
  self.updateProfile = updateProfile;

  function signup(userData) {
    return (
      $auth
        .signup(userData) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
          },

          function onError(error) {
            console.error(error);
          }
        )
    );
  }

  function login(userData) {
    return (
      $auth
        .login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
          },

          function onError(error) {
            console.error(error);
          }
        )
    );
  }

  function logout() {
    return (
      $auth
        .logout() // delete token (https://github.com/sahat/satellizer#authlogout)
        .then(function() {
          self.user = null;
        })
    );
  }

  function currentUser() {
    if ( self.user ) { return self.user; }
    if ( !$auth.isAuthenticated() ) { return null; }

    var deferred = $q.defer();
    getProfile().then(
      function onSuccess(response) {
        self.user = response.data;
        deferred.resolve(self.user);
      },

      function onError() {
        $auth.logout();
        self.user = null;
        deferred.reject();
      }
    )
    self.user = promise = deferred.promise;
    return promise;

  }

  function getProfile() {
    return $http.get('/api/me');
  }

  function updateProfile(profileData) {
    return (
      $http
        .put('/api/me', profileData)
        .then(
          function (response) {
            self.user = response.data;
          }
        )
    );
  }


}


// console.log('sanity');
// angular
//   .module('chaperon', [
//     'ui.router',
//     'satellizer'
//   ])
//   .controller('MainController', MainController)
//   // .controller('HomeController', HomeController)
//   .controller('LoginController', LoginController)
//   .controller('SignupController', SignupController)
//   .controller('LogoutController', LogoutController)
//   .controller('ProfileController', ProfileController)
//   .service('Account', Account)
//   .config(configRoutes)
//   ;
//
// ////////////
// // ROUTES //
// ////////////
//
// // configRoutes.$inject = ['$routeProvider', '$locationProvider'];
// // function configRoutes ($routeProvider, $locationProvider) {
//
// configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
// function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
//
//   //this allows us to use routes without hash params!
//   $locationProvider.html5Mode({
//     enabled: true,
//     require: false
//   });
//
//   // for any unmatched URL redirect to /
//   $urlRouterProvider.otherwise("/404");
//
//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: '/templates/users.html',
//       controller: 'UsersIndexController',
//       controllerAs: 'usersIndexCtrl'
//     })
//     .state('users', {
//       url: '/users',
//       templateUrl: '/templates/users.html',
//       controllerAs: 'usersIndexCtrl',
//       controller: 'UsersIndexController'
//     })
//     .state('/users/:id', {
//       url: '/user',
//       templateUrl: '/templates/users-show.html',
//       controllerAs: 'usersShowCtrl',
//       controller: 'UsersShowController'
//     })
//     .state('signup', {
//       url: '/signup',
//       templateUrl: 'templates/signup.html',
//       controller: 'SignupController',
//       controllerAs: 'sc',
//       resolve: {
//         skipIfLoggedIn: skipIfLoggedIn
//       }
//     })
//     .state('login', {
//       url: '/login',
//       templateUrl: 'templates/login.html',
//       controller: 'LoginController',
//       controllerAs: 'lc',
//       resolve: {
//         skipIfLoggedIn: skipIfLoggedIn
//       }
//     })
//     .state('logout', {
//       url: '/logout',
//       template: null,
//       controller: 'LogoutController',
//       resolve: {
//         loginRequired: loginRequired
//       }
//     })
//     .state('profile', {
//       url: '/profile',
//       templateUrl: 'templates/profile.html',
//       controller: 'ProfileController',
//       controllerAs: 'profile',
//       resolve: {
//         loginRequired: loginRequired
//       }
//     })
//     .state('meow', {
//       url: '/meow',
//       templateUrl: 'templates/meow.html'
//     })
//     .state('404', {
//       url: '/404',
//       templateUrl: 'templates/404.html'
//     })
//
//     function skipIfLoggedIn($q, $auth) {
//       var deferred = $q.defer();
//       if ($auth.isAuthenticated()) {
//         deferred.reject();
//       } else {
//         deferred.resolve();
//       }
//       return deferred.promise;
//     }
//
//     function loginRequired($q, $location, $auth) {
//       var deferred = $q.defer();
//       if ($auth.isAuthenticated()) {
//         deferred.resolve();
//       } else {
//         $location.path('/login');
//       }
//       return deferred.promise;
//     }
//
// }
//
// /////////////////
// // CONTROLLERS //
// /////////////////
//
// MainController.$inject = ["Account"]; // minification protection
//   function MainController (Account) {
//   var vm = this;
//
//   vm.currentUser = function() {
//     return Account.currentUser();
//   }
//
// }
//
// // HomeController.$inject = ["$http"]; // minification protection
// // function HomeController ($http) {
// //   var vm = this;
// //   vm.users = [];
// //   vm.new_user = {}; // form data
// //
// //   $http.get('/api/users')
// //   .then(function (response) {
// //     vm.users = response.data;
// //   });
// //
// //   vm.createUser = function() {
// //     $http.post('/api/contacts', vm.new_user)
// //     .then(function (response) {
// //       vm.new_user = {};
// //       vm.posts.push(response.data);
// //     });
// //   };
// // }
//
// LoginController.$inject = ["$location", "Account"]; // minification protection
// function LoginController ($location, Account) {
//   var vm = this;
//   vm.new_user = {}; // form data
//
//   vm.login = function() {
//   Account
//     .login(vm.new_user)
//     .then(function(){
//       vm.new_user = {}; // clear sign up form
//       $location.path('/profile'); // redirect to '/profile'
//     })
//   };
// }
//
// SignupController.$inject = ["$location", "Account"]; // minification protection
// function SignupController ($location, Account) {
// var vm = this;
// vm.new_user = {}; // form data
//
// vm.signup = function() {
//   Account
//     .signup(vm.new_user)
//     .then(
//       function (response) {
//         vm.new_user = {}; // clear sign up form
//         $location.path('/profile'); // redirect to '/profile'
//       }
//     );
//   };
// }
//
// LogoutController.$inject = ["$location", "Account"]; // minification protection
// function LogoutController ($location, Account) {
//   Account
//   .logout()
//   .then(function () {
//       $location.path('/login');
//   });
// }
//
//
// ProfileController.$inject = ["$location", "Account"]; // minification protection
// function ProfileController ($location, Account) {
//   var vm = this;
//   vm.new_profile = {}; // form data
//
//   vm.updateProfile = function() {
//   Account
//     .updateProfile(vm.new_profile)
//     .then(function () {
//       vm.showEditForm = false;
//     });
//   };
// }
//
// //////////////
// // Services //
// //////////////
//
// Account.$inject = ["$http", "$q", "$auth"]; // minification protection
// function Account($http, $q, $auth) {
//   var self = this;
//   self.user = null;
//
//   self.signup = signup;
//   self.login = login;
//   self.logout = logout;
//   self.currentUser = currentUser;
//   self.getProfile = getProfile;
//   self.updateProfile = updateProfile;
//
//   function signup(userData) {
//     return (
//       $auth
//         .signup(userData) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
//         .then(
//           function onSuccess(response) {
//             $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
//           },
//
//           function onError(error) {
//             console.error(error);
//           }
//         )
//     );
//   }
//
//   function login(userData) {
//     return (
//       $auth
//         .login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
//         .then(
//           function onSuccess(response) {
//             $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
//           },
//
//           function onError(error) {
//             console.error(error);
//           }
//         )
//     );
//   }
//
//   function logout() {
//     return (
//       $auth
//         .logout() // delete token (https://github.com/sahat/satellizer#authlogout)
//         .then(function() {
//           self.user = null;
//         })
//     );
//   }
//
//   function currentUser() {
//     if ( self.user ) { return self.user; }
//     if ( !$auth.isAuthenticated() ) { return null; }
//
//     var deferred = $q.defer();
//     getProfile().then(
//       function onSuccess(response) {
//         self.user = response.data;
//         deferred.resolve(self.user);
//       },
//
//       function onError() {
//         $auth.logout();
//         self.user = null;
//         deferred.reject();
//       }
//     )
//     self.user = promise = deferred.promise;
//     return promise;
//
//   }
//
//   function getProfile() {
//   return $http.get('/api/me');
//   }
//
//   function updateProfile(profileData) {
//     return (
//       $http
//         .put('/api/me', profileData)
//         .then(
//           function (response) {
//             self.user = response.data;
//           }
//         )
//     );
//   }
//
//
// }
