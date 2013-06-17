"use strict";

angular.module('expRepApp.controllers', [])
    .controller('welcomeController', function($scope){

    })
    .controller('expenseController', function($scope){

        var initReport = function(){
            $scope.expenses = [];
            $scope.expense = {};
            $scope.report = {
                total : 0
            };
        };

        initReport();

        $scope.addExpense = function(expense){
            expense.status = 1;
            $scope.expenses.push(expense);
            $scope.report.total = $scope.report.total + +expense.amount;
            $scope.expense = {};
        };

        $scope.resetReport = initReport;
    });