"use strict";

angular.module('expRepApp.filters', [])
    .filter('status', function(){

        var STATUS = {
            1 : '<span class="label label-info">En cours</span>',
            2 : '<span class="label label-success">Accepté</span>',
            3 : '<span class="label label-important">Refusé</span>'
        };

        return function (value){
            if(value && typeof(value) === 'number'){
                return STATUS[value];
            } else {
                return value;
            }

        };

    });