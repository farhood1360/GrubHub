/*
 * grunt-contrib-requirejs
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            test: [
                'migrations'
            ]
        },

        "mongo-migrate": {
            create: "",
            up: "",
            down: "",
            options: {
                config: "config.json",
                dbPropName: "mongo"
            }
        },

        // Unit tests.
        nodeunit: {
            create: ['test/create_test.js'],
            up: ['test/up_test.js'],
            down: ['test/down_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', [
        'clean',
        'mongo-migrate:create',
        'nodeunit:create',
        'mongo-migrate:up',
        'nodeunit:up',
        'mongo-migrate:down',
        'nodeunit:down',
        'clean'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint:all', 'test']);

};