'use strict';

//Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'angulartics',
    'angulartics.google.tagmanager'
])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/prva', {
                controller: 'PrvaController',
                templateUrl: 'prva.html'
            })

            .when('/druha', {
                controller: 'DruhaController',
                templateUrl: 'druha.html'
            })

            .otherwise({ redirectTo: '/prva' });

    }])


    .config(['$analyticsProvider', function ($analyticsProvider) {

        $analyticsProvider.virtualPageviews(true);

    }])

    .controller('PrvaController', ['$scope', '$analytics', function ($scope, $analytics) {
        $scope.potvrdenaPrihlaska = function() {
            $analytics.eventTrack('potvrdenaPrihlaska', {'category': 'Odbor', 'label': 'Informatika'});
            //window.dataLayer = window.dataLayer || [];
            //window.dataLayer.push({'event': 'potvrdenaPrihlaska', 'category': 'Odbor', 'label': 'Informatika'});
        };
        $scope.vlozenieDoAktovky = function() {
            $analytics.eventTrack('vlozenieDoAktovky', {'category': 'Odbor', 'label': 'Informatika'});
        };
    }])

    .controller('DruhaController', ['$scope', '$analytics', function ($scope, $analytics) {
        $scope.odstranenieZAktovky = function() {
            $analytics.eventTrack('odstranenieZAktovky', {'category': 'Odbor', 'label': 'Informatika'});
        };
    }])


