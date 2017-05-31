'use strict';


var app = angular.module('app', [])
    .config(appConfig);

function appConfig($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'view/home/home.template.html',
            controller: 'home.controller'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true,
        rewriteLinks: true
    });
}



