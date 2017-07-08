// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.meuperfil', {
    url: '/meuperfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/meuperfil.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('app.meditacao', {
    url: '/home/meditacao',
    views: {
      'menuContent': {
        templateUrl: 'templates/meditacao.html',
        controller: 'MeditacaoController'
      }
    }
  })

  .state('app.exercicios', {
    url: '/home/exercicios',
    views: {
      'menuContent': {
        templateUrl: 'templates/exercicios.html',
        controller: 'ExerciciosController'
      }
    }
  })

  .state('app.tutorial', {
    url: '/home/exercicios/tutorial',
    views: {
      'menuContent': {
        templateUrl: 'templates/tutorial.html',
        controller: 'TutorialController'
      }
    }
  })

  .state('app.videos', {
    url: '/home/exercicios/videos',
    views: {
      'menuContent': {
        templateUrl: 'templates/videos.html',
        controller: 'VideosController'
      }
    }
  })

  .state('app.postura', {
    url: '/home/postura',
    views: {
      'menuContent': {
        templateUrl: 'templates/postura.html',
        controller: 'PosturaController'
      }
    }
  })

  .state('app.glossario', {
    url: '/home/glossario',
    views: {
      'menuContent': {
        templateUrl: 'templates/glossario.html',
        controller: 'GlossarioController'
      }
    }
  })

  .state('app.locais', {
    url: '/home/locais',
    views: {
      'menuContent': {
        templateUrl: 'templates/locais.html',
        controller: 'LocaisController'
      }
    }
  })

  .state('app.mapa', {
    url: '/home/mapa',
    views: {
      'menuContent': {
        templateUrl: 'templates/mapa.html',
        controller: 'MapaController'
      }
    }
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
