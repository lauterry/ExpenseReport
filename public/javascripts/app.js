"use strict";

var expRepApp = angular.module('expRepApp', ['expRepApp.controllers', 'expRepApp.services', 'expRepApp.filters', 'expRepApp.directives']);

expRepApp.config(function($routeProvider){
       $routeProvider
               .when('/welcome', {
                   templateUrl: 'partials/welcome.html',
                   controller : 'welcomeController'
               })
               .when('/expense/add', {
                   templateUrl: 'partials/expense.html',
                   controller : 'expenseController'
               })
               .otherwise({
                   redirectTo: '/welcome'
               });
});