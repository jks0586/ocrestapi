// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','ngStorage','ngCordova','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    document.addEventListener("deviceready", function () {
  		screen.lockOrientation('portrait');
  	});

  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  //selectboxProvider.setTemplateUrl('lib/ionic-select-box/dist/templates/output-template.html');
  //selectboxProvider.setModalTemplateUrl('lib/ionic-select-box-select-box/dist/templates/input-template.html');

  //$translateProvider.translations('en',eng_langData);
  //$translateProvider.translations('ar',arb_langData);
  $ionicConfigProvider.views.transition('none');
  //--This has been added for the ios device goes blank issue----
  $ionicConfigProvider.views.swipeBackEnabled(false);

  $stateProvider
  .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
  /*  .state('app.iniscreen', {
      url: '/iniscreen',
      views: {
        'menuContent': {
          templateUrl: 'js/auth/iniscreen.html',
  		    controller: 'IniscreenCtrl'
        }
      }
    })
    .state('app.language', {
      url: '/language',
      views: {
        'menuContent': {
          templateUrl: 'js/auth/language.html',
  		    controller: 'LanguageCtrl'
        }
      }
    })*/
    //$urlRouterProvider.otherwise('/app/language');
});
