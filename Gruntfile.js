module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["public/javascripts/lib/"],
        copy: {
            main : {
                files: [
                    {src: ['components/angular/angular.js'], dest: 'public/javascripts/lib/angular/angular.js'},
                    {src: ['components/angular-i18n/angular-locale_fr-fr.js'], dest: 'public/javascripts/lib/angular/angular-locale_fr-fr.js'},
                    {src: ['components/jquery/jquery.js'], dest: 'public/javascripts/lib/jquery/jquery.js'},
                    {src: ['components/bootstrap/img/glyphicons-halflings.png'], dest: 'public/stylesheets/img/glyphicons-halflings.png'},
                    {src: ['components/bootstrap/img/glyphicons-halflings-white.png'], dest: 'public/stylesheets/img/glyphicons-halflings-white.png'},
                    {src: ['components/bootstrap/js/bootstrap.js'], dest: 'public/javascripts/lib/bootstrap/bootstrap.js'},
                    {src: ['components/bootstrap/css/bootstrap.css'], dest: 'public/stylesheets/bootstrap/bootstrap.css'},
                    {src: ['components/bootstrap/css/bootstrap-responsive.css'], dest: 'public/stylesheets/bootstrap/bootstrap-responsive.css'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy']);

};