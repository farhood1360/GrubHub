// Gruntfile.js

'use strict';

module.exports = function(grunt){

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================

    grunt.initConfig({  

        // concat: {
        //     dist: {
        //         src: ['/public/javascrips/*.js'],
        //         dest: '/public/views/main.js',
        //     }
        // },

        concurrent: {
            tasks: ['shell', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
        }, // concurrent

        shell: {
            mongo: {
                command: 'mongod',
                options: {
                    async: true
                }
            }
        }, // shell

        nodemon: {
            dev: {
                script: "app.js",
            } 
        }, // nodemon

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                port: 8081,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        } // karma
    });

    grunt.loadNpmTasks('grunt-concurrent');
    // grunt.loadNpmTasks('grunt-concat');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.template.today('yyyy-mm-dd');
    grunt.template.addDelimiters('myDelimiters', '{%', '%}');

    grunt.registerTask('default', 'Start server and database.', function() {
        var taskList = [
            'concurrent',
            'nodemon',
            'shell',
        ];
        grunt.task.run(taskList);
    });

};