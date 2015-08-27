var grunt = require('grunt'),
    path = require('path'),
    db = require('mongo-migrate/lib/db'),
    directory = grunt.config.get('mongo-migrate.options.directory'),
    cwd = directory !== undefined ? directory + path.sep : '',
    configFileName = grunt.config.get('mongo-migrate.options.config'),
    dbProperty = grunt.config.get('mongo-migrate.options.dbPropName');


exports['up'] = {
    up: function(test) {
        'use strict';

        var expect, result;

        db.getConnection(require(path.resolve(cwd + configFileName))[dbProperty], function(err, db) {

            if (err) {
                console.error('Error connecting to database');
                process.exit(1);
            }

            test.expect(1);

            expect = 1;
            db.migrationCollection.count(function(err, result) {

                test.equal(expect, result, 'should have passed a migration');

                test.done();
            });
        });
    }
};