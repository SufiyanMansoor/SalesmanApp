angular.module('SalesmanApp', ['ionic','firebase'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('Home', {
                url: '/Home',
                templateUrl: 'views/Home/Home.html'
            })
            .state('Salesman', {
                url: '/Salesman',
                controller:'SalesmanController',
                templateUrl:'views/Salesman/Salesman.html'
            })
            .state('Orderbooking', {
                url: '/Orderbooking',
                controller:'OrderbookingController',
                templateUrl:'views/Orderbooking/Orderbooking.html'
            })
            .state('Admin', {
                url: '/Admin',
                controller: 'AdminController',
                templateUrl:'views/Admin/Admin.html'
            })
            .state('Contactus', {
                url: '/Contactus',
                controller: 'ContactusController',
                templateUrl:'views/Contactus/Contactus.html'
            })
            .state('Welcomecompany', {
                url: '/Welcomecompany',
                templateUrl:'views/Welcomecompany/Welcomecompany.html'
            });

        $urlRouterProvider.otherwise('/Welcomecompany');

    })

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })