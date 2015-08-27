/*
 * grunt-contrib-mongo-migrate
 * Grunt task that wraps the MONGO-MIGRATE module (https://github.com/afloyd/mongo-migrate).
 *
 * Licensed under the MIT license.
 * https://git.thinksolid.com/travis.mchattie/grunt-migrate/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

    'use strict';

    var methods = [],
        options = null,
        migrateBinPath = null;


    /**
     * Helper method to interface with the migrate bin file.
     * @param cmd Command that is going to be executed.
     */
    function run(cmd){

        var proc = require('child_process'),
            done = grunt.task.current.async(); // Tells Grunt that an async task is complete

        proc.exec(cmd,
            function(error, stdout, stderr){
                if(stderr){
                    grunt.log.writeln('ERROR: ' + stderr).error();
                }
                grunt.log.writeln(stdout);
                done(error);
            }
        );
    }

    /**
     * Migrate UP to either the latest migration file or to a migration name passed in as an argument.
     */
    function up(){
        console.log(grunt.target);
        var key = (grunt.option('name') || ""),
            label = ( key || "EMPTY"),
            cmd = (migrateBinPath + " up " + key).trim();

        grunt.log.write('Running migration "UP" [' + label + ']...').ok();
        run(cmd);
    }

    /**
     * Migrate DOWN to either the latest migration file or to a migration name passed in as an argument.
     */
    function down(){
        var key = (grunt.option('name') || ""),
            label = ( key || "EMPTY"),
            cmd = (migrateBinPath + " down " + key).trim();

        grunt.log.write('Running migration "DOWN" [' + label + ']...').ok();
        run(cmd);
    }

    /**
     * Migrate CREATE will create a new migration file.
     */
    function create(){
        var cmd = (migrateBinPath + " create " + grunt.option('name')).trim();

        grunt.log.write('Creating a new migration named "' + grunt.option('name') + '"...').ok();
        run(cmd);
    }


    function configure(task) {
        options = task.options({
            directory : null,
            config: "default-config.json",
            dbPropName: "dbSettings",
            binaryPath: "./node_modules/mongo-migrate"
        });

        migrateBinPath = 'node '
            + options.binaryPath
            + ' --runMongoMigrate'
            + ' --config ' + options.config
            + ' --dbPropName ' + options.dbPropName
        ;

        if (options.directory !== null) {
            migrateBinPath += ' --chdir ' + options.directory;
        }
    }

    grunt.registerMultiTask('mongo-migrate', 'Execute mongo-migrate command', function() {

        configure(this);

        methods.up = up;
        methods.down = down;
        methods.create = create;
        methods[this.target]();
    });
};